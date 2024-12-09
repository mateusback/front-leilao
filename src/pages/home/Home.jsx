import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CircularProgress,
} from "@mui/material";
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useTranslation } from "react-i18next";
import interrogacao from '../../resources/images/interrogacao.png';
import AuctionService from "../../services/AuctionService";

const auctionService = new AuctionService();

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchAuctions = async () => {
      setIsLoading(true);
      try {
        const data = await auctionService.getAll();
        setAuctions(data);
        setIsEmpty(data.length === 0);
      } catch (error) {
        console.error("Erro ao buscar leilões:", error.message);
        setIsEmpty(true); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuctions();
  }, []); 

  const handleViewItem = (itemId) => {
    navigate(`${ROUTES.ITEM_DETAILS}/${itemId}`);
  };

  const handleAddCategory = () => {
    navigate(`${ROUTES.CATEGORY_FORM}`);
  };

  const handleAddAuction = () => {
    navigate(`${ROUTES.AUCTION_FORM}`);
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.headerContainer}>
      </div>
      <Grid container spacing={2}
      className={style.buttons}>
        <Grid item xs={4}> </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCategory}
            className={style.addCategoryButton}
            fullWidth
            sx={{
              borderRadius: '5px',
              color: '#2f2600',
              borderColor: '#151100',
              backgroundColor: '#fbdd64',
              '&:hover': {
                backgroundColor: '#fef2c2',
                borderColor: '#2f2600',
              }
            }}
          >
            {t("category.add-category")}
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddAuction}
            className={style.addAuctionButton}
            fullWidth
            sx={{
              borderRadius: '5px',
              color: '#2f2600',
              borderColor: '#151100',
              backgroundColor: '#fccc64',
              '&:hover': {
                backgroundColor: '#fef2c2',
                borderColor: '#2f2600',
              }
            }}
          >
            {t("auction.add-auction")}
          </Button>
        </Grid>
        <Grid item xs={4}> </Grid>
      </Grid>
      <Divider>
        <Typography variant="h4"
        sx={{color: "#4f4c35"}}>
          {t("auction.auctions-active")}
        </Typography>
      </Divider>

      <Grid container spacing={2} className={style.itemContainer}>
        {isLoading ? (
          <div className={style.loadingContainer}>
            <CircularProgress />
            <Typography>{t("loading.loading-items")}</Typography>
          </div>
        ) : isEmpty ? (
          <div className={style.emptyContainer}>
            <Typography variant="h6" color="text.secondary">
              {t("auction.no-items-available")}
            </Typography>
            <img 
              src={interrogacao} 
              alt="No items available" 
              style={{ width: "66px", height: "66px" }} 
            />
          </div>
        ) : (
          auctions.map((auction) => (
            <Grid item xs={12} sm={6} md={4} key={auction.id}>
              <Card className={style.itemCard}>
                <CardMedia
                  component="img"
                  height="140"
                  image={auction.images && auction.images.length > 0
                    ? auction.images[0].imagePath
                    : "https://via.placeholder.com/300x200"}
                  alt={auction.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {auction.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t("auction.minimum-bid")}: ${auction.minimumBid}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleViewItem(auction.id)}>
                    {t("auction.view-details")}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Home;
