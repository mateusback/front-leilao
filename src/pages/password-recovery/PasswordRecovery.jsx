import React from "react";
import "./PasswordRecovery.css";
import { Input, Grid, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import { useTranslation } from "react-i18next";

const PasswordRecovery = () => {
  const {t} = useTranslation();
  return (
    <AuthLayout headerText={t('login.forgot-password')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            fullWidth
            type="email"
            placeholder={t('input.email.field')}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            {t('button.send-email')}
          </Button>
        </Grid>
        <CancelButton />
      </Grid>
    </AuthLayout>
  );
};

export default PasswordRecovery;
