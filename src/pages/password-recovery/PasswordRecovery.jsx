import React from "react";
import "./PasswordRecovery.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Input, Grid, Button, Typography } from "@mui/material";
import esnupiImage from '../../components/images/esnupi.png';
import '@fontsource/roboto/300.css';
import CancelButton from "../../components/CancelButton";

const PasswordRecovery = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" >  
                <CardMedia
                sx={{ height: 140 }}
                image= {esnupiImage}
                title="Esnupi"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h4">Recuperar Senha</Typography>
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input fullWidth type="email" placeholder='E-mail' autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained">Enviar E-mail</Button>
                            </Grid>
                            <CancelButton />
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default PasswordRecovery;