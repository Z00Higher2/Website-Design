import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';import './Services.css'
import Cards1 from '../Homepage/Cards1'

const Service = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(

        <div className = "Header7">
        <h1 data-aos="fade-up">OUR SERVICES</h1>

     
        
         <h1 data-aos="fade-up">WHAT WE OFFER</h1>
             <div className= "elem-header8">

             {/* <h1 className="header-text-1" data-aos="fade-up">SERVICE 1</h1>
             <h1 className="header-text-2" data-aos="fade-up">SERVICE 2</h1>
             <h1 className="header-text-3" data-aos="fade-up">SERVICE 3</h1>
             <h1 className="header-text-4"data-aos="fade-up">SERVICE 4</h1> */}
             <Cards1/>

            </div>
            <p data-aos="fade-up">What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.</p>
            <p data-aos="fade-up">What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.</p>
            <p data-aos="fade-up">What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.</p>
            <p  data-aos="fade-up">What should we know about this service? Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase key values of your services.</p>


         <div className="Header9">
             <h1 data-aos="fade-up">THE RESULTS</h1>
             <h1 data-aos="fade-up">“WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.”</h1>
             <h2 data-aos="fade-up">— Quote source</h2>

         </div>
         </div>

    )
}

export default Service;