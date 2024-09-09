import React, { useState } from "react";
import { Input, Grid, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import AuthLayout from "../../components/AuthLayout";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({ email: "", senha: "" });

  const handlePasswordRecovery = () => {
    navigate(ROUTES.PASSWORD_RECOVERY);
  };

  const handleRegister = () => {
    navigate(ROUTES.REGISTER);
  };

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const login = () => {
    if (usuario.email === "email@email.com" || usuario.senha === "123456") {
      let token = "token do backend";
      localStorage.setItem("token", token);
      localStorage.setItem("email", JSON.stringify(usuario.email));
      navigate(ROUTES.HOME);
    } else {
      alert(t('input.password.login-error'));
    }
  };

  return (
    <AuthLayout headerText="Login">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            fullWidth
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="E-mail"
            autoComplete="new-password" />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            onAbort={handleChange}
            name="password"
            id="password"
            type="password"
            placeholder={t('input.password.field')}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={login}
            fullWidth
            variant="contained"
            sx={{
              borderRadius: '5px',
              color: '#2f2600',
              backgroundColor: '#fef2c2',
              borderColor: '#2f2600',
              '&:hover': {
                borderColor: '#151100',
                backgroundColor: '#fbdd64',
              }
            }}
            
            >
            Login
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth onClick={handleRegister} variant="outlined"
            sx={{
              borderRadius: '5px',
              color: '#2f2600',
              borderColor: '#fbdd64', 
              '&:hover': {
                borderColor: '#fbdd64',
                backgroundColor: '#fef2c2',
              }
            }}
          >
            {t('button.sign-up')}
          </Button>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Button fullWidth onClick={handlePasswordRecovery}
            sx={{
              borderRadius: '5px',
              color: '#2f2600',
              '&:hover': {
                color: '#2f2600',
                backgroundColor: '#fef7db',
              }
            }}
          >
            {t('button.forgot-password')}
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default Login;
