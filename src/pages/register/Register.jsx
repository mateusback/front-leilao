import React from "react";
import "./Register.css";
import { Input, Grid, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";

const Register = () => {
  return (
    <AuthLayout headerText="Registrar-se">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input fullWidth placeholder="Nome" autoComplete="new-password" />
        </Grid>
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
        <Grid item xs={12}>
          <Input
            fullWidth
            type="password"
            placeholder="Repita a senha"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            Login
          </Button>
        </Grid>
        <CancelButton />
      </Grid>
    </AuthLayout>
  );
};

export default Register;
