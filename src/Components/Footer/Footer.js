import React from 'react';
import './Footer.css';
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Upbeat Code ${year}`}</footer>;
  };
  
  export default Footer;