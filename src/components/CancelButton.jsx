import React from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CancelButton = () => {
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(-1);
    };

    return (
            <Grid item xs={12}>
                <Button fullWidth onClick={handleCancelClick} variant="outlined">Cancelar</Button>
            </Grid>
    );
}

export default CancelButton;