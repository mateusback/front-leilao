import React from "react";
import { Input, Grid, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import AuthLayout from "../../components/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const handlePasswordRecovery = () => {
    navigate(ROUTES.PASSWORD_RECOVERY);
  };
  const handleRegister = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <AuthLayout headerText="Login">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input fullWidth placeholder="E-mail" autoComplete="new-password" />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            type="password"
            placeholder="Senha"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained">
            Login
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth onClick={handleRegister} variant="outlined">
            Cadastrar-se
          </Button>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Button fullWidth onClick={handlePasswordRecovery}>
            Esqueci minha senha
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default Login;
