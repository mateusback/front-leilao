import React from "react";
import "./ChangePassword.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Input, Grid, Button, Typography } from "@mui/material";
import esnupiImage from '../../components/images/esnupi.png';
import '@fontsource/roboto/300.css';
import CancelButton from "../../components/CancelButton";

const ChangePassword = () => {
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
                        <Typography gutterBottom variant="h4">Mudar a senha</Typography>
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input fullWidth placeholder='E-mail' autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Input fullWidth placeholder='Código' autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={6}>
                                <Input fullWidth type='password' placeholder='Senha' autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={6}>
                                <Input fullWidth type='password' placeholder='Confirmar a senha' autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained">Alterar a senha</Button>
                            </Grid>
                            <CancelButton />
                            <Grid item xs={6}>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ChangePassword;