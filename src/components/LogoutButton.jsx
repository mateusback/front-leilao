import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const LogoutButton = () => {
    const {t, i18n} = useTranslation();
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <Button fullWidth onClick={handleLogout} variant="outlined">{t('button.leave')}</Button>
    );
}

export default LogoutButton;