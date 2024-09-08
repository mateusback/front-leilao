import React from "react";
import style from "./Home.module.css";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

const Home = () => {
  const navigate = useNavigate();

  const handleViewItem = (itemId) => {
    // Navega para a página de detalhes do item
    navigate(`${ROUTES.ITEM_DETAILS}/${itemId}`);
  };

  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "Descrição breve do item 1.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Item 2",
      description: "Descrição breve do item 2.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Item 3",
      description: "Descrição breve do item 3.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    // Adicione mais itens conforme necessário
  ];

  return (
    <div className={style.homeContainer}>
      <Typography variant="h1" className={style.pageTitle}>
        Itens em Leilão
      </Typography>
      <Grid container className={style.itemContainer}>
        {items.map((item) => (
          <div key={item.id} className={style.itemCard}>
            <img src={item.imageUrl} alt={item.title} />
            <div className={style.itemDetails}>
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="body1">{item.description}</Typography>
              <Button
                className={style.button}
                onClick={() => handleViewItem(item.id)}
              >
                Ver Detalhes
              </Button>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
