import React from 'react'
import'./Navbar.css' ;

const Navbar = () =>{

    return(
        <div className= "Nav">
            <ul>
            <li><a href="/" className= "list">Home</a></li>
            <li><a href="/Services" className= "list">Services</a></li>
            <li><a href="/About" className= "list">About</a></li>
            <li><a href="/Contact" className= "list">Contact</a></li>
            <li><a href="/Links" className= "list">Links</a></li>
            <li href="/More" className= "list"><button className="button"><span>More</span></button></li>

            </ul>

        </div>
        
    );
};


export default Navbar;