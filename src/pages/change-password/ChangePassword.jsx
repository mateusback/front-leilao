import React from "react";
import "./ChangePassword.css";
import CardContent from "@mui/material/CardContent";
import { Input, Grid, Button, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import CancelButton from "../../components/CancelButton";

const ChangePassword = () => {
  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input fullWidth placeholder="E-mail" autoComplete="new-password" />
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth placeholder="Código" autoComplete="new-password" />
        </Grid>
        <Grid item xs={6}>
          <Input
            fullWidth
            type="password"
            placeholder="Senha"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            fullWidth
            type="password"
            placeholder="Confirmar a senha"
            autoComplete="new-password"
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
    </CardContent>
  );
};

export default ChangePassword;
