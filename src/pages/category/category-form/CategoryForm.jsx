import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CategoryService from "../../../services/CategoryService";
import { ROUTES } from "../../../routes";

const CategoryForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const categoryService = new CategoryService();

  const [formData, setFormData] = useState({
    name: "",
    observation: "",
    personId: 1, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    categoryService.insert(formData)
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {t("category.add-category")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={t("category.name")}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={t("category.observation")}
              name="observation"
              value={formData.observation}
              onChange={handleChange}
            />
          </Grid>
          <div style={{ marginTop: "20px" }}>
            <Button variant="contained" color="primary" type="submit">
              {t("category.save")}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "10px" }}
              onClick={() => navigate(ROUTES.HOME)}
            >
              {t("category.cancel")}
            </Button>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default CategoryForm;
