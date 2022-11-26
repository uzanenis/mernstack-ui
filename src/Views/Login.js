import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import { login } from "../axios";

const Login = ({ setUser }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        isError: false,
        usernameError: "",
        passwordError: ""
    })

    const handeValidationUsername = (e) => {
        if(formData.email.length < 3){
            setError({
                isError: true,
                usernameError: "Username Error"
            })
        }
        else{
            setError({
                isError: false
            })
        }
    }
    const handeValidationPassword = (e) => {
        if(formData.password.length < 5){
            setError({
                isError: true,
                passwordError: "Password Error"
            })
        }
        else{
            setError({
                isError: false
            })

        }
    }

    return (
        <div>
            <Box component="form" onSubmit={(e) => {
                e.preventDefault()
                login(formData).then((response) => {
                    if(response.status === 200){
                        localStorage.setItem('user', JSON.stringify(response.data.user))
                        setUser(response.data.user)
                        navigate('/')
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }} my={4} sx={{ display: "flex", flexDirection: "column", justifyContent:'center', alignItems:'center' }}>
                <TextField
                    error={error.isError}
                    color={error.isError ? "" : "success"}
                    name='username'
                    label='Username'
                    variant="outlined"
                    required={true}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            email: e.target.value
                        })
                        handeValidationUsername(e);
                    }}
                    helperText={error.usernameError}
                />
                <TextField
                    error={error.isError}
                    color={error.isError ? "" : "success"}
                    required={true}
                    onChange={(e) => {
                        handeValidationPassword(e);
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })

                    }}
                    helperText={error.passwordError}
                    name='password'
                    label='Password'
                    type="password"
                    variant="outlined"
                    sx={{ my:2 }}
                />
                <Button variant="contained" type="submit" sx={{ mt:2 }}>
                    Log In
                </Button>
                <div>
                    Not a member? <Button variant="text"><Link to="/signup" style={{ textDecoration:'none', color:'blue' }}>Sign Up</Link></Button>
                </div>
            </Box>
        </div>
    );
};

export default Login;