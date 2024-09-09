import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import style from './Footer.module.css'; 
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={style.footer}>
            <h2>{t('home.contact')}</h2>
            <p>Email: Lorem@Ipsum.com</p>
            <p>&copy; {new Date().getFullYear()} Balance. {t('home.rights')}</p>
            <div className={style.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}

export default Footer;
