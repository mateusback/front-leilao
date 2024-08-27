import React from "react";
import style from "./Home.module.css";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useTranslation } from "react-i18next";

const Home = () => {
  const {i18n} = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const handleLoginClick = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleChangePasswordClick = () => {
    navigate(ROUTES.CHANGE_PASSWORD);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={20} sm={6} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button onClick={() => changeLanguage('en')}>EN</Button>
            <Button onClick={() => changeLanguage('pt-BR')}>PT</Button>
            <Typography className={`${style.textColor}`} textAlign="center" variant="h4">
              {i18n.t('home.welcome')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleChangePasswordClick}
              color="primary"
            >
              Mudar a senha
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
