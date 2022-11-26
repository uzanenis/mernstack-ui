import React, {useState} from 'react';
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {signup} from "../axios";

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: "",
        password: "",
        phoneNumber: "",
        email: ""
    })
    return (
        <div>
            <Box component="form" onSubmit={(e) => {
                e.preventDefault()
                signup(formData).then((response) => {
                    if(response.status === 201){
                        navigate('/signin')
                    }
                }).catch(err => console.log(err))

            }} my={4} sx={{ display: "flex", flexDirection: "column", justifyContent:'center', alignItems:'center' }}>
                <Grid direction="column" container>
                    <Grid item my={2} md={6}>
                        <TextField
                            name='fullName'
                            label='Full Name'
                            variant="outlined"
                            type="name"
                            required={true}
                            fullWidth
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    fullName: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item my={2} md={6}>
                        <TextField
                            name='email'
                            label='E-Mail'
                            variant="outlined"
                            type="email"
                            required={true}
                            fullWidth
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item my={2} md={6}>
                        <TextField
                            name='phoneNumber'
                            label='Phone Number'
                            variant="outlined"
                            type="number"
                            required={true}
                            fullWidth
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    phoneNumber: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item my={2} md={6}>
                        <TextField
                            name='password'
                            label='Password'
                            variant="outlined"
                            type="password"
                            required={true}
                            fullWidth
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    password: e.target.value
                                })
                            }}
                        />
                    </Grid>
                    <Grid item my={2} md={6}>
                        <TextField
                            name='passwordAgain'
                            label='Password Again'
                            variant="outlined"
                            type="password"
                            required={true}
                            fullWidth
                        />
                    </Grid>

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

export default Signup;