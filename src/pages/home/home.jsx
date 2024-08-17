import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

const Home = () => {
  const navigate = useNavigate();

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
            <Typography textAlign="center" variant="h4">
              Home
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
