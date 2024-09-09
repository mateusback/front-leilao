import DefaultLayout from "../../components/DefaultLayout";
import { Card, CardHeader, CardContent, Grid, Typography, Avatar, IconButton, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from './Profile.module.css';

const Profile = () => {
    const navigate = useNavigate();

    const handleClickProfilePicture = () => {
        navigate("/edit-profile");
    };

    return (
        <DefaultLayout>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={style.card}>
                        <CardHeader
                            avatar={
                                <Avatar className={style.avatar}>
                                    <CardMedia
                                        component="img"
                                        image="https://upload.wikimedia.org/wikipedia/pt/5/53/Snoopy_Peanuts.png"
                                        alt="Foto de perfil"
                                    />
                                </Avatar>
                            }
                            action={
                                <IconButton className={style.iconButton} onClick={handleClickProfilePicture} aria-label="Editar Perfil">
                                    Editar Perfil
                                </IconButton>
                            }
                            title={<Typography variant="h5">NOME DO BANCO</Typography>}
                            subheader="E-MAIL DO BANCO"
                            className={style.cardHeader}
                        />
                        <CardContent className={style.cardContent}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">Documento:</Typography>
                                    Documento do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">Telefone:</Typography>
                                    Telefone do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">Endereço:</Typography>
                                    <Typography variant="body2">CEP: CEP do Banco</Typography>
                                    <Typography variant="body2">Rua: Rua do Banco</Typography>
                                    <Typography variant="body2">Número: Numero banco</Typography>
                                    <Typography variant="body2">Complemento: Complemento do banco</Typography>
                                    <Typography variant="body2">Bairro: Bairro do banco</Typography>
                                    <Typography variant="body2">Cidade: Cidade do banco</Typography>
                                    <Typography variant="body2">Estado: Estado do banco</Typography>
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
