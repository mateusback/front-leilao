import React from "react";
import { Grid, Button, Card, Input, TextField, } from "@mui/material";

const Address = () => {
    return (
            <Grid container spacing={2}>
                <Grid item xs={1}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="outlined-multiline-static"
                    label="CEP"
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="outlined-multiline-static"
                    label="Rua"
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="outlined-multiline-static"
                    label="Número"
                    type="number"
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="outlined-multiline-static"
                    label="Complemento"
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="outlined-multiline-static"
                    label="Bairro"
                />
                </Grid>
                <Grid item xs={8}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="outlined-multiline-static"
                    label="Cidade"
                />
                </Grid>
                <Grid item xs={4}>
                <TextField
                    fullWidth
                    variant="standard"
                    id="outlined-multiline-static"
                    label="Estado"
                />
                </Grid>
            </Grid>
    );
}

export default Address;