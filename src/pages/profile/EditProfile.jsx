import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import { Card, CardContent, Grid, TextField, CardHeader, Avatar, IconButton, CardMedia, Button } from "@mui/material";
import Address from "../../components/Address";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EditProfile = () => {
    const { t } = useTranslation();
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
                                    {t('button.edit-profile')}
                                </IconButton>
                            }
                            title={t('profile.profile')}
                            subheader={t('profile.edit-info')}
                        />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        placeholder={t('profile.name')}
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
                                        placeholder={t('profile.document')}
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
                            marginLeft: '90%',
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