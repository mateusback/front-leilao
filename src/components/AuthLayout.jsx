import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import backgroundImage from '../components/images/background.jpg';
import loginHeader from "../components/images/loginheader.png";

const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <Grid
      container
      justifyContent="flex-end"
      alignItems="center"
      style={{ height: "100vh", paddingRight: { sm: "20px", xs: 0 } }}
    >
      <Grid item xs={20} sm={6} md={4}>
        <Card variant="outlined">
          <CardMedia sx={{ height: 140 }} image={loginHeader} title="headerCard" />
          <CardContent>
            <Typography gutterBottom variant="h4">
              Login
            </Typography>
          </CardContent>
      {children}
      </Card>
      </Grid>
    </Grid>
    </Box>
  );
};

export default AuthLayout;
