import DefaultLayout from "../../components/DefaultLayout";
import { Card, CardHeader, CardContent, Grid, Typography, Avatar, IconButton, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from './Profile.module.css';
import { useTranslation } from "react-i18next";

const Profile = () => {
    const { t } = useTranslation();
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
                                    {t('button.edit-profile')}
                                </IconButton>
                            }
                            title={<Typography variant="h5">NOME DO BANCO</Typography>}
                            subheader="E-MAIL DO BANCO"
                            className={style.cardHeader}
                        />
                        <CardContent className={style.cardContent}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">{t('profile.document')}:</Typography>
                                    Documento do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">{t('profile.cellphone')}:</Typography>
                                    Telefone do Banco
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={style.typography} variant="body1">{t('address.address')}:</Typography>
                                    <Typography variant="body2">{t('address.postal-code')}: CEP do Banco</Typography>
                                    <Typography variant="body2">{t('address.address')}: Rua do Banco</Typography>
                                    <Typography variant="body2">{t('address.number')}: Numero banco</Typography>
                                    <Typography variant="body2">{t('address.complement')}: Complemento do banco</Typography>
                                    <Typography variant="body2">{t('address.neighborhood')}: Bairro do banco</Typography>
                                    <Typography variant="body2">{t('address.city')}: Cidade do banco</Typography>
                                    <Typography variant="body2">{t('address.state')}: Estado do banco</Typography>
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
