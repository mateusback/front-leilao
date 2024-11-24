import React, { useState } from "react";
import { Input, Grid, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import OTP from "../../components/inputs/OTP";
import PersonService from "../../services/PersonService";
import "@fontsource/roboto/300.css";

const ConfirmEmail = () => {
  const { t } = useTranslation();
  const [passcode, setPasscode] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const personService = new PersonService();

  const handleSubmit = async () => {
    try {
        const usuario = { email, passcode };
        const response = await personService.confirmEmail(usuario);
      toast.success("Confirmação de conta realizada com sucesso!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(ROUTES.HOME);
    } catch (err) {
      toast.error(err.message || "Erro ao realizar o confirmar conta.", {
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
    <AuthLayout headerText={t('login.confirm-email')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input 
            onChange={(e) => setEmail(e.target.value)}
            fullWidth 
            placeholder={t('input.email.field')}
            autoComplete="new-password"/>
        </Grid>
        <Grid item xs={12} container direction="column" alignItems="center" justifyContent="left">
          <Typography variant="body1" color="grey">{t('input.passcode.field')}:</Typography>
          <OTP separator={<span>-</span>} value={passcode} onChange={setPasscode} length={5} />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained"
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
          {t('login.confirm-email')}
          </Button>
        </Grid>
        <CancelButton />
        <Grid item xs={6}></Grid>
      </Grid>
    </AuthLayout>
  );
};

export default ConfirmEmail;
