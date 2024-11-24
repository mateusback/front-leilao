import React, { useState } from "react";
import { Input, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import PasswordInput from "../../components/inputs/PasswordInput";
import PersonService from "../../services/PersonService";
import "./Register.css";
import "@fontsource/roboto/300.css";

const Register = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const personService = new PersonService();
  const [usuario, setUsuario] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const response = await personService.register(usuario);
      toast.success("Cadastro realizado com sucesso! Agora, cofirme sua conta", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(ROUTES.CONFIRM_EMAIL);
    } catch (err) {
      toast.error(err.message || "Erro ao realizar o cadastro no serviço.", {
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
    <AuthLayout headerText={t('login.register')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            fullWidth 
            placeholder={t('input.name.field')} 
            autoComplete="new-password"
            name="name"
            id="name"
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
          <Input 
            fullWidth 
            placeholder={t('input.email.field')} 
            autoComplete="new-password"
            name="email"
            id="email"
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
        <PasswordInput
            name="password"
            value={usuario.password}
            onChange={handleChange}
            placeholderText={t('input.password.field')}
        />
        </Grid>
        <Grid item xs={12}>
        <PasswordInput
            name="confirmPassword"
            value={usuario.confirmPassword}
            onChange={handleChange}
            placeholderText={t('input.password.password-confirmation')}
        />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={register}
            sx={{            
              borderRadius: '5px',
              color: '#2f2600',
              borderColor: '#fbdd64', 
              backgroundColor: '#fef2c2',
              '&:hover': {
                  borderColor: '#fbdd64',
                  backgroundColor: '#fbdd64',
              }
              }}
          >
          {t('login.register')}
          </Button>
        </Grid>
        <CancelButton />
      </Grid>
    </AuthLayout>
  );
};

export default Register;
