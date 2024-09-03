import DefaultLayout from "../../components/DefaultLayout";
import { Card, CardContent, Grid, Input, CardHeader, Avatar, IconButton, CardMedia, Button, Typography } from "@mui/material";
import Address from "../../components/Address";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handleClickProfilePicture = () => {
        navigate(ROUTES.EDIT_PROFILE);
    };

    return (
        <DefaultLayout>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Foto de perfil">
                                    <CardMedia
                                        component="img"
                                        image="https://upload.wikimedia.org/wikipedia/pt/5/53/Snoopy_Peanuts.png"
                                        alt="Foto de perfil"
                                    />
                                </Avatar>
                            }
                            action={
                                <IconButton onClick={handleClickProfilePicture} aria-label="TESTE">
                                    Editar Perfil
                                </IconButton>
                            }
                            title="NOME DO BANCO"
                            subheader="E-MAIL DO BANCO"

                        />
                        <CardContent>
                            <Grid container spacing={2}>
                                {/* <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Nome: </Typography>
                                    Nome do banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">E-mail: </Typography>
                                    E-mail do banco
                                </Grid> */}
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Documento: </Typography>
                                    Documento do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Telefone: </Typography>
                                    Telefone do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">CEP: </Typography>
                                    CEP do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Rua: </Typography>
                                    Rua do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Número: </Typography>
                                    Numero banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Complemento: </Typography>
                                    Complemento do banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Bairro: </Typography>
                                    Bairro do banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Cidade: </Typography>
                                    Cidade do banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" color="initial">Estado: </Typography>
                                    Estado do banco
                                </Grid> 
                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
};

export default Profile;