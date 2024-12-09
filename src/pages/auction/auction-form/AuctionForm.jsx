import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import { toast } from "react-toastify";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../../routes";
import AuctionService from "../../../services/AuctionService";
import CategoryService from "../../../services/CategoryService";
import Divider from '@mui/material/Divider';

const AuctionForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { auctionId } = useParams();
  const auctionService = new AuctionService();
  const categoryService = new CategoryService();

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    status: "",
    observation: "",
    incrementValue: "",
    minimumBid: "",
    personId: 23,
    categoryId: "",
    images: [],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getAll();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error.message);
      }
    };

    const fetchAuction = async () => {
      if (auctionId) {
        try {
          const data = await auctionService.getById(auctionId);
          setFormData(data);
        } catch (error) {
          console.error("Erro ao buscar dados do leilão:", error.message);
        }
      }
    };

    fetchCategories();
    fetchAuction();
  }, [auctionId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (index, field, value) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setFormData({ ...formData, images: updatedImages });
  };

  const handleAddImage = () => {
    setFormData({
      ...formData,
      images: [...formData.images, { imageName: "", imagePath: "" }],
    });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (auctionId) {
        await auctionService.update(formData);
      } else {
        await auctionService.insert(formData);
      }
      navigate(ROUTES.HOME);
      toast.success("Categoria criada com sucesso!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    } catch (err) {
      toast.error(err.message || "Erro ao Cadastrar Categoria.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {auctionId ? t("auction.edit-auction") : t("auction.add-auction")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={t("auction.title")}
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={t("auction.description")}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label={t("auction.start-date-time")}
              name="startDateTime"
              value={formData.startDateTime}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label={t("auction.end-date-time")}
              name="endDateTime"
              value={formData.endDateTime}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={t("auction.status")}
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={t("auction.observation")}
              name="observation"
              value={formData.observation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label={t("auction.increment-value")}
              name="incrementValue"
              value={formData.incrementValue}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label={t("auction.minimum-bid")}
              name="minimumBid"
              value={formData.minimumBid}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label={t("auction.category")}
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {}
          <Grid item xs={12}>
          <Divider>
            <Typography variant="h5"
            sx={{color: "#4f4c35"}}>
              {t("auction.images")}
            </Typography>
          </Divider>
            {formData.images.map((image, index) => (
              <Grid container spacing={2} key={index} alignItems="center">
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label={t("auction.image-name")}
                    value={image.imageName}
                    onChange={(e) =>
                      handleImageChange(index, "imageName", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label={t("auction.image-path")}
                    value={image.imagePath}
                    onChange={(e) =>
                      handleImageChange(index, "imagePath", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    color="secondary"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <Remove />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddImage}
              startIcon={<Add />}
              style={{ marginTop: "10px" }}
              sx={{
                marginBottom: '20px',
                borderRadius: '5px',
                color: '#2f2600',
                backgroundColor: '#fef2c2',
                borderColor: '#2f2600',
                '&:hover': {
                  borderColor: '#151100',
                  backgroundColor: '#fbdd64',
                }
              }}
            >
              {t("auction.add-image")}
            </Button>
          </Grid>
        </Grid>
        <Divider/>
        <Grid container spacing={2} sx={{marginTop: '20px', marginLeft: '10px'}}>
          <Button variant="outlined" color="primary" type="submit"
                      sx={{
                        borderRadius: '5px',
                        color: '#2f2600',
                        backgroundColor: '#fef2c2',
                        borderColor: '#2f2600',
                        '&:hover': {
                          borderColor: '#151100',
                          backgroundColor: '#fbdd64',
                        }
                      }}>
            {t("auction.save")}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginLeft: "10px" }}
            onClick={() => navigate(ROUTES.HOME)}
            sx={{
              borderRadius: '5px',
              color: '#2f2600',
              borderColor: '#fbdd64', 
              '&:hover': {
                borderColor: '#fbdd64',
                backgroundColor: '#fef2c2',
              }
            }}
          >
            {t("auction.cancel")}
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default AuctionForm;
