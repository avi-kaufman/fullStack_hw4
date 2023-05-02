import React from 'react';
import {Grid, Box, TextField, Button} from '@mui/material';
class Login extends React.Component {
    render(){
        return(
            <Box id='login' display="flex" justifyContent="center">
                <Box width="50%">
                    <Box textAlign="center">
                        <h2>Login</h2>
                    </Box>
                   <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    helperText="Please enter your name"
                                    id="demo-helper-text-aligned"
                                    label="Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="filled-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="primary">Login</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Box textAlign="center">
                                    <a href="">Forgot Username / Password</a>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        )
    }
}

export default Login;
