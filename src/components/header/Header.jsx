import React from "react";
import style from './Header.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AvatarIcon from "../avatar-icon/AvatarIcon";

const Header = () => {

    return (
        <Grid className={`${style.header}`} container spacing={0}>
            <Grid item xs={11}>
                <Typography variant="h4" color="initial">Header</Typography>
            </Grid>
            <Grid item xs={1} display="flex" alignItems="center" justifyContent='right'>
                <AvatarIcon />
            </Grid>
        </Grid>
    );
}

export default Header;
