import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer data-aos="fade-up">{`Copyright © Upbeat Code ${year}`}</footer>;
  };
  
  export default Footer;