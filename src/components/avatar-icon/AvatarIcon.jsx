import React, { useState } from "react";
import { Avatar, IconButton, Popover, MenuItem } from "@mui/material";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import style from './AvatarIcon.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AvatarIcon = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClickProfilePicture = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
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
                <MenuItem onClick={() => handleNavigate(ROUTES.PROFILE)}>Profile</MenuItem>
                <MenuItem onClick={() => handleNavigate(ROUTES.SETTINGS)}>Settings</MenuItem>
                <MenuItem onClick={() => handleNavigate(ROUTES.HELP)}>Help</MenuItem>
                <MenuItem onClick={() => handleNavigate(ROUTES.LOGOUT)}>Logout</MenuItem>
            </Popover>
        </>
    );
}

export default AvatarIcon;