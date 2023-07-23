import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Homepage.css';
import Carousel1 from './Carousel1.js'
import Cards1 from './Cards1.js';
import { FaDiscord, FaFacebook, FaPinterest, FaInstagram, FaSnapchat } from 'react-icons/fa'
import {} from 'react-icons/fa'
const Homepage = () =>{

    useEffect(() => {
        AOS.init();
      }, [])

    return(
    <div className = "body-1">

        <div className= "body1">  <div className = "Header1">
            <div className="Heading1-1">
        <h1 data-aos="fade-up" style={{fontSize: 80}}>StreamZone:</h1>
        <h1 data-aos="fade-up" style={{fontSize: 80}}>Unlimited Entertainment</h1>
        <h1 data-aos="fade-up" style={{fontSize: 80}}> At Your Fingertips!</h1>
        <button data-aos="fade-up" className="button2"><span className = "btn-span">Learn More</span></button></div>
        

        
        </div>
        <div className= "all-heads">
        <Carousel1 className= "all-heads1"/>
       
        
        </div>
    
       
     
         <div className="Header2">
             <h1 data-aos="fade-up">WE OFFER VARIOUS SERVICES</h1>
             <div className="all-header2-elem">
                <Cards1/>
            
             </div>
         </div>

         <div className="Header3">
             <h1 data-aos="fade-up">MORE ABOUT OUR BRAND</h1>
             <p data-aos="fade-up" style={{fontSize: 20}}>-We are proud to announce that we have formed strategic partnerships with some of the most renowned and popular streaming sites in the entertainment industry. These partnerships allow us to offer our users an even broader selection of content and enhance their streaming experience</p>
             <button data-aos="fade-up" className="button2"><span className = "btn-span">Learn More</span></button>

         </div>

         <div className="Header4">
             <h1 data-aos="fade-up">SOCIAL</h1>
             <button data-aos="fade-up" className="button1"><span className = "btn-span">< FaDiscord className="logos"/></span></button>
             <button data-aos="fade-up" className="button1"><span className = "btn-span">< FaFacebook className="logos"/></span></button>
             <button data-aos="fade-up" className="button1"><span className = "btn-span">< FaPinterest className="logos"/></span></button>
             <button data-aos="fade-up" className="button1"><span className = "btn-span">< FaInstagram className="logos"/></span></button>
             <button data-aos="fade-up" className="button1"><span className = "btn-span">< FaSnapchat className="logos"/></span></button>
             
             
             


             

         </div>
         <div className="Header5">
             <h1 data-aos="fade-up">SUBSCRIBE</h1>
             <p data-aos="fade-up">Tell people what they can expect when they sign up with their email, like a newsletter, discounts, or updates.</p>

         </div>
</div>

      
        </div>
  
  
      

        
    )
}



export default Homepage;