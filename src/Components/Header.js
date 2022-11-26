import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Container} from "@mui/material";

const Header = ({ user, setUser }) => {
    useEffect(() => {
        if(localStorage.getItem('user') && !user){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [user])
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            flexGrow: 1,fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>
                            MERN
                        </Typography>
                        {
                            user
                                ?
                                <Button variant="contained" color="primary" sx={{}} onClick={(e) => {
                                    localStorage.removeItem('user')
                                    setUser(null)
                                }}>
                                    Çıkış Yap
                                </Button>
                                :
                                <Button variant="contained" color="primary" sx={{}}>
                                    <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>Sign In</Link>
                                </Button>

                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;