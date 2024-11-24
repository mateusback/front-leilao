import React, { useState } from "react";
import { Input, Grid, Button, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import PasswordInput from "../../components/inputs/PasswordInput";
import OTP from "../../components/inputs/OTP";
import PersonService from "../../services/PersonService";
import "@fontsource/roboto/300.css";
import "./ChangePassword.css";
import { toast } from "react-toastify";
import { ROUTES } from "../../routes";

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const personService = new PersonService();
  const { t } = useTranslation();
  const [passcode, setPasscode] = useState("");
  const [usuario, setUsuario] = useState({email: searchParams.get("email"), newPassword: "", confirmPassword: ""  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
        const personData = { ...usuario, passcode };
        const response = await personService.changePassword(personData);
      toast.success("Alteração de senha realizada com sucesso!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let token = response.token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", JSON.stringify(usuario.email));
      navigate(ROUTES.HOME);
    } catch (err) {
      toast.error(err.message || "Erro desconhecido ao alterar senha, tenta novamente mais tarde.", {
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
    <AuthLayout headerText={t('login.change-password')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input 
            value={usuario.email}
            onChange={handleChange}
            fullWidth
            placeholder={t('input.email.field')}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
        <PasswordInput
            name="newPassword"
            value={usuario.newPassword}
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
        <Grid item xs={12} container direction="column" alignItems="center" justifyContent="left">
          <Typography variant="body1" color="grey">{t('input.passcode.field')}:</Typography>
          <OTP separator={<span>-</span>} value={passcode} onChange={setPasscode} length={5} />
        </Grid>
        <Grid item xs={12}>
          <Button 
            onClick={handleSubmit}
            fullWidth 
            variant="contained"
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
          {t('login.change-password')}
          </Button>
        </Grid>
        <CancelButton />
        <Grid item xs={6}></Grid>
      </Grid>
    </AuthLayout>
  );
};

export default ChangePassword;
