import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import AuctionService from "../../../services/AuctionService";
import style from "./ItemDetails.module.css";

const ItemDetails = () => {
  const { t } = useTranslation();
  const { itemId } = useParams(); 
  const navigate = useNavigate();

  const [auction, setAuction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const auctionService = new AuctionService();
        const data = await auctionService.getById(itemId);
        setAuction(data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do leilão:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuction();
  }, [itemId]);

  if (isLoading) {
    return <Typography>{t("loading.loading-details")}</Typography>;
  }

  if (!auction) {
    return (
      <Typography color="error">
        {t("auction.error-fetching-details")}
      </Typography>
    );
  }

  return (
    <div className={style.detailsContainer}>
      <Card className={style.detailsCard}>
        <CardContent>
          <Typography variant="h4">{auction.title}</Typography>
          <Typography variant="body1" gutterBottom>
            {auction.description}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.start-date")}: </strong>
            {new Date(auction.startDateTime).toLocaleString()}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.end-date")}: </strong>
            {new Date(auction.endDateTime).toLocaleString()}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.status")}: </strong>
            {auction.status}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.minimum-bid")}: </strong>${auction.minimumBid}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.increment-value")}: </strong>${auction.incrementValue}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.observation")}: </strong>
            {auction.observation || t("auction.no-observation")}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.category")}: </strong>
            {auction.category ? auction.category.name : t("auction.no-category")}
          </Typography>
          <Typography variant="subtitle1">
            <strong>{t("auction.owner")}: </strong>
            {auction.person ? auction.person.name : t("auction.no-owner")}
          </Typography>
        </CardContent>
      </Card>

      {/* Galeria de Imagens */}
      <div className={style.galleryContainer}>
        <Typography variant="h5" className={style.galleryTitle}>
          {t("auction.images")}
        </Typography>
        <Grid container spacing={2}>
          {auction.images && auction.images.length > 0 ? (
            auction.images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={image.imagePath}
                    alt={image.imageName || t("auction.image")}
                    sx={{
                      objectFit: "contain",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {image.imageName || t("auction.no-name")}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography color="text.secondary">
              {t("auction.no-images")}
            </Typography>
          )}
        </Grid>
      </div>

      <Grid container spacing={2} className={style.actions}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
          >
            {t("auction.back")}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetails;
