import React from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CancelButton = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(-1);
    };

    return (
            <Grid item xs={12}>
                <Button fullWidth onClick={handleCancelClick} variant="outlined"
                    sx={{            
                        borderRadius: '5px',
                        color: '#2f2600',
                        borderColor: '#fbdd64', 
                        '&:hover': {
                            borderColor: '#fbdd64',
                            backgroundColor: '#fef2c2',
                        }
                        }}
                >{t("button.cancel")}</Button>
            </Grid>
    );
}

export default CancelButton;