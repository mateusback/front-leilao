import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import style from './Footer.module.css'; 

const Footer = () => {
    return (
        <div className={style.footer}>
            <h2>Contato</h2>
            <p>Email: contato@exemplo.com</p>
            <p>&copy; {new Date().getFullYear()} Balance. Todos os direitos reservados.</p>
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
