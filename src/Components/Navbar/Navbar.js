import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import'./Navbar.css' ;
import Zone from './../Images/Zone.png'

const Navbar = () =>{
    useEffect(() => {
        AOS.init();
      }, [])


    return(
        <div className= "Nav">
            <a href="/home"><img src= {Zone} alt="pic1" className="picture-1"/></a>
            <ul>
            <li><a data-aos="fade-up" href="/" className= "list">Home</a></li>
            <li><a data-aos="fade-up" href="/Services" className= "list">Services</a></li>
            <li><a data-aos="fade-up" href="/About" className= "list">About</a></li>
            <li><a data-aos="fade-up" href="/Contact" className= "list">Contact</a></li>
            <li><a data-aos="fade-up" href="/Links" className= "list">Links</a></li>
            <li className= "list"><button className="button"><span>More</span></button></li>

            </ul>

        </div>
        
    );
};


export default Navbar;