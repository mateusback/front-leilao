import React from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CancelButton = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(-1);
    };

    return (
            <Grid item xs={12}>
                <Button fullWidth onClick={handleCancelClick} variant="outlined">{t("button.sign-out")}</Button>
            </Grid>
    );
}

export default CancelButton;