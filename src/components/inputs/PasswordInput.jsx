import { Grid, Input, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { useState } from "react";

const PasswordInput = ({value, onChange }) => {
    const [errorMessage, setErrorMessage] = useState('');

    const validatePassword = (password) => {
        const minLength = /.{6,}/;
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;
        const number = /\d/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (!minLength.test(password)) {
            return "A senha deve ter no mínimo 6 caracteres.";
        } else if (!upperCase.test(password)) {
            return "A senha deve conter pelo menos 1 letra maiúscula.";
        } else if (!lowerCase.test(password)) {
            return "A senha deve conter pelo menos 1 letra minúscula.";
        } else if (!number.test(password)) {
            return "A senha deve conter pelo menos 1 número.";
        } else if (!specialChar.test(password)) {
            return "A senha deve conter pelo menos 1 caractere especial.";
        } else {
            return '';
        }
    };

    const handleChange = (e) => {
        const newPassword = e.target.value;
        onChange(newPassword);
        const error = validatePassword(newPassword);
        setErrorMessage(error);
    };

    return (
        <div>
            <Input
                fullWidth
                type="password"
                placeholder="Confirmar a senha"
                autoComplete="new-password"
                value={value}
                onChange={handleChange}
                error={!!errorMessage}
            />
            {errorMessage && (
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <FiberManualRecordIcon style={{ fontSize: 10, color: "red" }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="caption" color="error">
                            {errorMessage}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default PasswordInput;
