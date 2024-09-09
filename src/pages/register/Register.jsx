import React, { useState } from "react";
import { Input, Grid, Button } from "@mui/material";
import CancelButton from "../../components/CancelButton";
import AuthLayout from "../../components/AuthLayout";
import PasswordInput from "../../components/inputs/PasswordInput";
import { useTranslation } from "react-i18next";
import "./Register.css";
import "@fontsource/roboto/300.css";


const Register = () => {
  const {t} = useTranslation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <AuthLayout headerText={t('login.register')}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input fullWidth placeholder={t('input.name.field')} autoComplete="new-password" />
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth placeholder={t('input.email.field')} autoComplete="new-password" />
        </Grid>
        <Grid item xs={12}>
        <PasswordInput
            value={password}
            onChange={setPassword}
            placeholderText= {t('input.password.field')}
          />
        </Grid>
        <Grid item xs={12}>
        <PasswordInput
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholderText= {t('input.password.password-confirmation')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained"
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
          {t('login.register')}
          </Button>
        </Grid>
        <CancelButton />
      </Grid>
    </AuthLayout>
  );
};

export default Register;
