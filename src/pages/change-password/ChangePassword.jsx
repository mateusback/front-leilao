import React, { useState } from "react";
import { Input, Grid, Button, Typography } from "@mui/material";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import PasswordInput from "../../components/inputs/PasswordInput";
import { useTranslation } from "react-i18next";
import OTP from "../../components/inputs/OTP";
import "@fontsource/roboto/300.css";
import "./ChangePassword.css";

const ChangePassword = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [passcode, setPasscode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <AuthLayout headerText={t('login.change-password')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input fullWidth placeholder={t('input.email.field')}autoComplete="new-password" />
        </Grid>
        <Grid item xs={12} container direction="column" alignItems="center" justifyContent="left">
          <Typography variant="body1" color="grey">{t('input.passcode.field')}:</Typography>
          <OTP separator={<span>-</span>} value={passcode} onChange={setPasscode} length={5} />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholderText={t('input.password.field')}
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholderText={t('input.password.password-confirmation')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
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
