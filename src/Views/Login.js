import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({
        isError: false,
        usernameError: "",
        passwordError: ""
    })
    const handeValidationUsername = (e) => {
        setUsername(e.target.value)
        if(username.length < 3){
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
        setPassword(e.target.value)
        if(password.length < 6){
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
            <Box component="form" my={4} sx={{ display: "flex", flexDirection: "column", justifyContent:'center', alignItems:'center' }}>
                <TextField
                    error={error.isError}
                    color={error.isError ? "" : "success"}
                    name='username'
                    label='Username'
                    variant="outlined"
                    required={true}
                    onChange={handeValidationUsername}
                    helperText={error.usernameError}
                />
                <TextField
                    error={error.isError}
                    color={error.isError ? "" : "success"}
                    required={true}
                    onChange={handeValidationPassword}
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