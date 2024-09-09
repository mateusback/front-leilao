import React, { useState } from "react";
import { Avatar, IconButton, Popover, MenuItem } from "@mui/material";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import style from './AvatarIcon.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from "react-i18next";

const AvatarIcon = () => {
    const { t, i18n} = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();


    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleClickProfilePicture = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
    };

    const handleNavigate = (route) => {
        navigate(route);
        handleClose();
    }

    return (
        <>
            <IconButton
                onClick={handleClickProfilePicture}
                sx={{
                    marginRight: 3,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Avatar
                    sx={{
                        width: 40,
                        height: 40
                    }}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/pt/5/53/Snoopy_Peanuts.png"
                        alt="Foto de perfil"
                        height="100%"
                        style={{ borderRadius: '50%' }}
                    />
                </Avatar>
                <ArrowDropDownIcon
                    sx={{
                        ml: 0.5,
                        width: 24,
                        height: 24
                    }}
                />
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                classes={{
                    paper: style.fadeIn,
                }}
            >
                <MenuItem onClick={() => handleNavigate(ROUTES.PROFILE)}>{t('button.profile')}</MenuItem>
                <MenuItem onClick={() => handleLanguageChange('pt-BR')}>PT</MenuItem>
                <MenuItem onClick={() => handleLanguageChange('en')}>ENG</MenuItem>
                <MenuItem onClick={handleLogout}>{t('button.sign-out')}</MenuItem>
            </Popover>
        </>
    );
}

export default AvatarIcon;