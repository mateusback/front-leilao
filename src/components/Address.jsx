import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import axios from "axios";

const Address = () => {
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
                    label="CEP"
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="Digite o CEP"
                    error={!!error}
                    helperText={error}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Endereço"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Endereço"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Bairro"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Bairro"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Cidade"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Estado"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Estado"
                />
            </Grid>
        </Grid>
    );
};

export default Address;
