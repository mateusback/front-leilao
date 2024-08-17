import React from "react";
import "./PasswordRecovery.css";
import { Input, Grid, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";

const PasswordRecovery = () => {
  return (
    <AuthLayout headerText="Recuperar Senha">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            fullWidth
            type="email"
            placeholder="E-mail"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            Enviar E-mail
          </Button>
        </Grid>
        <CancelButton />
      </Grid>
    </AuthLayout>
  );
};

export default PasswordRecovery;
