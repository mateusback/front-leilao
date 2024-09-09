import React from "react";
import style from "./Home.module.css";
import { Grid, Typography, Button, Card, CardContent, CardMedia, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useTranslation } from "react-i18next";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import imgItem1 from "../../resources/images/item1.jpg";
import imgItem2 from "../../resources/images/item2.jpg";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleViewItem = (itemId) => {
    navigate(`${ROUTES.ITEM_DETAILS}/${itemId}`);
  };

  const stats = {
    auctionsActive: 12,
    lastItemsSold: [
      { id: 1, title: "Banana 1", date: "10/09/2024", imageUrl: imgItem1 },
      { id: 2, title: "Banana 2", date: "09/09/2024", imageUrl: imgItem2 },
    ],
    newUsers: 5,
    totalSales: 45,
  };

  const salesData = [
    { name: "Jan", sales: 30 },
    { name: "Feb", sales: 50 },
    { name: "Mar", sales: 45 },
    { name: "Apr", sales: 80 },
    { name: "May", sales: 70 },
  ];

  return (
    <div className={style.homeContainer}>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <div className={style.statCard}>
            <Typography variant="h5">{t('auction.auctions-active')}</Typography>
            <Typography variant="h3">{stats.auctionsActive}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={style.statCard}>
            <Typography variant="h5">{t('auction.last-items-sold')}</Typography>
            <ul>
              {stats.lastItemsSold.map((item) => (
                <span key={item.id}>
                  {item.title} - {item.date}; <br />  
                </span>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={style.statCard}>
            <Typography variant="h5">{t('auction.new-users')}</Typography>
            <Typography variant="h3">{stats.newUsers}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={style.statCard}>
            <Typography variant="h5">{t('auction.total-sales')}</Typography>
            <Typography variant="h3">{stats.totalSales}</Typography>
          </div>
        </Grid>
      </Grid>

      <div className={style.chartContainer}>
        <Typography variant="h5">{t('auction.total-sales')}</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
          <Line type="monotone" dataKey="sales" stroke="#806903" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Typography variant="h4" className={style.pageTitle}>
      {t('auction.auctions-active')}
      </Typography>
      <Grid container spacing={2} className={style.itemContainer}>
        {stats.lastItemsSold.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className={style.itemCard}>
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrl || "https://via.placeholder.com/300x200"}
                alt={item.title}
                sx={{ objectFit: 'cover' }}   
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleViewItem(item.id)}>
                  {t('auction.view-details')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
