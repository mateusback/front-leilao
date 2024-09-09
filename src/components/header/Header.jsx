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

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                                Balance
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Button 
                                    onClick={() => handleLanguageChange('en')} 
                                    className={style.languageButton}
                                >
                                    EN
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button 
                                    onClick={() => handleLanguageChange('pt-BR')} 
                                    className={style.languageButton}
                                >
                                    PT
                                </Button>
                            </Grid>
                            <Grid item>
                                <AvatarIcon />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" color="initial" className={style.subheader}>
                    {t("brand.slogan")}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Header;
