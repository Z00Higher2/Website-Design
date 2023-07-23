import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './More.css';

const More = () =>{
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div className="Header10">
          <h1 data-aos="fade-up" >
              Alternative Sites
          </h1>

        </div>



    )
}

export default More;