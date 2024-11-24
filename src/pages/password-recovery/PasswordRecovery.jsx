import React, { useState } from "react";
import { Input, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { toast } from "react-toastify";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import PersonService from "../../services/PersonService";
import "./PasswordRecovery.css";
import "@fontsource/roboto/300.css";

const PasswordRecovery = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const personService = new PersonService();
  const [usuario, setUsuario] = useState({ email: ""});

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await personService.recoverPassword(usuario);
      toast.success("Email de recuperação enviado com sucesso! Por favor, confirme suas alterações.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(`${ROUTES.CHANGE_PASSWORD}?email=${encodeURIComponent(usuario.email)}`);
    } catch (err) {
      toast.error(err.message || "Erro inesperado ao tentar recuperar a senha, tente novamente mais tarde.", {
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
    <AuthLayout headerText={t('login.forgot-password')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            fullWidth
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder={t('input.email.field')}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            fullWidth 
            variant="contained"
            onClick={handleSubmit}
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
            {t('button.send-email')}
          </Button>
        </Grid>
        <CancelButton />
      </Grid>
    </AuthLayout>
  );
};

export default PasswordRecovery;
