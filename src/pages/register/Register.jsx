import React, { useState } from "react";
import "./Register.css";
import { Input, Grid, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import PasswordInput from "../../components/inputs/PasswordInput";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        <PasswordInput
            value={password}
            onChange={setPassword}
            label="Senha"
          />
        </Grid>
        <Grid item xs={12}>
        <PasswordInput
            value={confirmPassword}
            onChange={setConfirmPassword}
            label="Repita a senha"
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
