import React from "react";
import "./Login.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Input, Grid, Button, Typography } from "@mui/material";
import esnupiImage from '../../components/images/esnupi.png';
import '@fontsource/roboto/300.css';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

const Login = () => {
    const navigate = useNavigate();
    const handlePasswordRecovery = () => {
        navigate(ROUTES.PASSWORD_RECOVERY);
    }
    const handleRegister = () => {
        navigate(ROUTES.REGISTER);
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={20} sm={6} md={4}>
                <Card variant="outlined" >  
                <CardMedia
                sx={{ height: 140 }}
                image= {esnupiImage}
                title="Esnupi"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h4">Login</Typography>
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input fullWidth placeholder='E-mail' autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Input fullWidth type='password' placeholder='Senha' autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth variant="contained">Login</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth onClick={handleRegister} variant="outlined">Cadastrar-se</Button>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={6}>
                                <Button fullWidth onClick={handlePasswordRecovery}>Esqueci minha senha</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Login;