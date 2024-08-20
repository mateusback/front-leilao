import React from "react";
import './Header.css';
import LogoutButton from "../LogoutButton";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Avatar } from "@mui/material";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleClickProfilePicture = () => {
        navigate(ROUTES.PROFILE);
    }

    return (
        <Grid className="header" container spacing={0}>
            <Grid item xs={10}>
                <Typography variant="h4" color="initial">Header</Typography>
            </Grid>
            <Grid item xs={1}>
                <Avatar onClick={handleClickProfilePicture}>
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/pt/5/53/Snoopy_Peanuts.png" 
                    alt="Foto de perfil"
                    height="100%"
                    />
                </Avatar>
            
            </Grid>    
            <Grid item xs={1}>
                <LogoutButton />
            </Grid>
        </Grid>

    );
}

export default Header;