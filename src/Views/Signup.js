import React, {useState} from 'react';
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";

const Signin = () => {
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
                <Grid container spacing={2}>
                    <Grid item md={6}>
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
                    </Grid>
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
                        Create Account
                    </Button>
                    <div>
                        Are you a member? <Button variant="text"><Link to="/signin" style={{ textDecoration:'none', color:'blue' }}>Sign In</Link></Button>
                    </div>
                </Grid>

            </Box>
        </div>
    );
};

export default Signin;