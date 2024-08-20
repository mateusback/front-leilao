import DefaultLayout from "../../components/DefaultLayout";
import { Card, CardContent, Grid, Input, CardHeader, Avatar, IconButton, CardMedia, Button } from "@mui/material";
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
                                <Avatar aria-label="Foto de perfil">
                                    <CardMedia
                                        component="img"
                                        image="https://upload.wikimedia.org/wikipedia/pt/5/53/Snoopy_Peanuts.png"
                                        alt="Foto de perfil"
                                    />
                                </Avatar>
                            }
                            action={
                                <IconButton  onClick={handleClickProfilePicture} aria-label="TESTE">
                                    Editar Perfil
                                </IconButton>
                            }
                            title="Perfil"
                            subheader="Edite suas informações"

                        />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Input fullWidth placeholder="Nome" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input fullWidth placeholder="E-mail" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input fullWidth placeholder="Documento" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Address />
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                    <Button>Salvar</Button>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
};

export default EditProfile;