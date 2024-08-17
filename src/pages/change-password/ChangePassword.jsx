import React, { useState } from "react";
import "./ChangePassword.css";
import { Input, Grid, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import PasswordInput from "../../components/inputs/PasswordInput";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <AuthLayout headerText="Alterar Senha">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input fullWidth placeholder="E-mail" autoComplete="new-password" />
        </Grid>
        <Grid item xs={6}>
          <Input fullWidth placeholder="Código" autoComplete="new-password" />
        </Grid>
        <Grid item xs={12}>
        <PasswordInput
            value={password}
            onChange={setPassword}
            label="Repita a senha"
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
            Alterar a senha
          </Button>
        </Grid>
        <CancelButton />
        <Grid item xs={6}></Grid>
      </Grid>
    </AuthLayout>
  );
};

export default ChangePassword;
