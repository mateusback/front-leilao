import React, { useState } from "react";
import { Input, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import PersonSerivce from "../../services/PersonService";
import AuthLayout from "../../components/AuthLayout";
import "@fontsource/roboto/300.css";

const Login = () => {
  const { t } = useTranslation();
  const personService = new PersonSerivce();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({ email: "", password: "" });

  const handlePasswordRecovery = () => {
    navigate(ROUTES.PASSWORD_RECOVERY);
  };

  const handleRegister = () => {
    navigate(ROUTES.REGISTER);
  };

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await personService.login(usuario);
      console.log(response);
      let token = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("email", JSON.stringify(usuario.email));
      navigate(ROUTES.HOME);
    } catch (err) {
      toast.error(err.message || "Erro ao realizar login.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
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
            onChange={handleChange}
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
