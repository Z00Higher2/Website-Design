import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'

const About = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
    <div className="Header6">
    <h1 data-aos="fade-up">MORE ABOUT OUR BRAND</h1>
    <p data-aos="fade-up">Tell people about who you are, your origin, your process, or your inspirations. Tap into your creativity. You’ve got this. The way you tell your story online can make all the difference. Don’t worry about sounding professional. Sound like you.</p>
    
    </div>

    <div className= "Header6-part2">
        
    </div>

    </div>

    
  )
}

export default About;