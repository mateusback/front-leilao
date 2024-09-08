import React from "react";
import style from './Header.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AvatarIcon from "../avatar-icon/AvatarIcon";

const Header = () => {

    return (
        <Grid className={`${style.header}`} container spacing={0}>
            <Grid item xs={12}>
                <Typography variant="h4" color="initial">Banlance</Typography>
                <Grid item xs={1} display="flex" alignItems="center" justifyContent='right'>
                    <AvatarIcon />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" color="initial">No leilão do sabor, só dá banana!</Typography>
            </Grid>
        </Grid>
    );
}

export default Header;
