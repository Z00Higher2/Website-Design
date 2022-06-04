import React from 'react';
import BootstrapCarouselComponent from '../CareerPage/Carousel';
import Flip from '../CareerPage/FlipCard';
import Card1 from '../JobOpprtunities/Cards';
import Cards from '../JobOpprtunities/CareerCard'
import '../../css/Outlook.css';


function Outlook () {
    return (
        <div>
           <h1 className="Text">Careers Available to Explore</h1>
           <BootstrapCarouselComponent/>
           <Cards/>
           <Flip/>
           <Card1/>
        </div>
    )
}


export default Outlook;