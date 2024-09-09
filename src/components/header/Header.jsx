import React from "react";
import style from './Header.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AvatarIcon from "../avatar-icon/AvatarIcon";
import logo from '../../resources/images/logo.svg';
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <Grid container className={style.header} spacing={0} alignItems="center">
            <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Grid container alignItems="center">
                            <img src={logo} className={style.logo} alt='logo' onClick={handleLogoClick}/>
                            <Typography variant="h4" className={style.fontFamily} sx={{ marginLeft: 2 }}>
                                Banlance
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <AvatarIcon />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;
