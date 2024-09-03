import React, { useState } from 'react';
import {Input, InputAdornment, IconButton, Typography, Tooltip } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';
import CodeInput from './OTP';

const PasswordInput = ({ value, onChange, placeholderText }) => {
    const {t, i18n} = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [criteria, setCriteria] = useState({
        minLength: false,
        upperCase: false,
        lowerCase: false,
        number: false,
        specialChar: false,
    });

    const validatePassword = (password) => {
        const minLength = /.{6,}/;
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;
        const number = /\d/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        return {
            minLength: minLength.test(password),
            upperCase: upperCase.test(password),
            lowerCase: lowerCase.test(password),
            number: number.test(password),
            specialChar: specialChar.test(password),
        };
    };

    const handleChange = (event) => {
        const newPassword = event.target.value;
        onChange(newPassword);
        setCriteria(validatePassword(newPassword));
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Tooltip
                title={
                    <>
                        <Typography variant="body2" color={criteria.minLength ? 'green' : 'red'}>
                            <CheckCircleOutline style={{ fontSize: 16, color: criteria.minLength ? 'green' : 'red' }} />
                            &nbsp; {t('input.password.password-six-characters')}
                        </Typography>
                        <Typography variant="body2" color={criteria.upperCase ? 'green' : 'red'}>
                            <CheckCircleOutline style={{ fontSize: 16, color: criteria.upperCase ? 'green' : 'red' }} />
                            &nbsp; {t('input.password.password-one-lowercase')}
                        </Typography>
                        <Typography variant="body2" color={criteria.lowerCase ? 'green' : 'red'}>
                            <CheckCircleOutline style={{ fontSize: 16, color: criteria.lowerCase ? 'green' : 'red' }} />
                            &nbsp; {t('input.password.password-one-uppercase')}
                        </Typography>
                        <Typography variant="body2" color={criteria.number ? 'green' : 'red'}>
                            <CheckCircleOutline style={{ fontSize: 16, color: criteria.number ? 'green' : 'red' }} />
                            &nbsp; {t('input.password.password-one-number')}
                        </Typography>
                        <Typography variant="body2" color={criteria.specialChar ? 'green' : 'red'}>
                            <CheckCircleOutline style={{ fontSize: 16, color: criteria.specialChar ? 'green' : 'red' }} />
                            &nbsp; {t('input.password.password-one-special-character')}
                        </Typography>
                    </>
                }
                placement="left"
                arrow
                componentsProps={{
                    tooltip: {
                        sx: {
                            backgroundColor: '#fffae6',
                            fontSize: '14px',
                            borderRadius: '10px',
                        },
                    },
                    arrow: {
                        sx: {
                            color: '#fffae6',
                        },
                    },
                }}
            >
                <Input
                    fullWidth
                    id="password-input"
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={handleChange}
                    placeholder= {placeholderText}
                    autoComplete='new-password'
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    aria-describedby="password-helper-text"
                />
            </Tooltip>
        </>
    );
};

export default PasswordInput;
