import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Address = () => {
    const { t } = useTranslation();
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [error, setError] = useState("");

    const handleCepChange = async (event) => {
        const newCep = event.target.value;
        setCep(newCep);
        if (newCep.length === 8) { 
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${newCep}/json/`);
                if (response.data.erro) {
                    setError("CEP não encontrado.");
                    setAddress("");
                    setNeighborhood("");
                    setCity("");
                    setState("");
                } else {
                    setAddress(response.data.logradouro);
                    setNeighborhood(response.data.bairro);
                    setCity(response.data.localidade);
                    setState(response.data.uf);
                    setError("");
                }
            } catch (err) {
                setError("Erro ao buscar o CEP.");
                setAddress("");
                setNeighborhood("");
                setCity("");
                setState("");
            }
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label={t('address.postal-code')}
                    value={cep}
                    onChange={handleCepChange}
                    placeholder={t('address.postal-code')}
                    error={!!error}
                    helperText={error}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label={t('address.address')} 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t('address.address')} 
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label={t('address.neighborhood')} 
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder={t('address.neighborhood')} 
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label={t('address.city')}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t('address.city')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label={t('address.state')}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder={t('address.state')}
                />
            </Grid>
        </Grid>
    );
};

export default Address;
