import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import { Card, CardContent, Grid, TextField, CardHeader, Avatar, IconButton, CardMedia, Button } from "@mui/material";
import Address from "../../components/Address";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();

    const handleClickProfilePicture = () => {
        navigate(ROUTES.PROFILE);
    };

    return (
        <DefaultLayout>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    <CardMedia
                                        component="img"
                                        image="https://upload.wikimedia.org/wikipedia/pt/5/53/Snoopy_Peanuts.png"
                                        alt="Foto de perfil"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </Avatar>
                            }
                            action={
                                <IconButton onClick={handleClickProfilePicture} aria-label="Editar Perfil">
                                    Editar Perfil
                                </IconButton>
                            }
                            title="Perfil"
                            subheader="Edite suas informações"
                        />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        placeholder="Nome"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        placeholder="E-mail"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        placeholder="Documento"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Address />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Button variant="contained" color="primary" 
                                sx={{
                                    marginTop: '10px',
                                    marginBottom: '20px',
                                    borderRadius: '5px',
                                    color: '#2f2600',
                                    backgroundColor: '#fbdd64',
                                    borderColor: '#fbdd64', 
                                    '&:hover': {
                                      borderColor: '#fbdd64',
                                      backgroundColor: '#fef2c2',
                                    }
                                  }}
                    >
                        Salvar
                    </Button>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
};

export default EditProfile;