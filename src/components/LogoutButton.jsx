import { Button } from "@mui/material";
import React from "react";

const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <Button fullWidth onClick={handleLogout} variant="outlined">Sair</Button>
    );
}

export default LogoutButton;