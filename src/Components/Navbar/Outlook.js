import React from 'react';
import BootstrapCarouselComponent from '../CareerPage/Carousel';
import Flip from '../CareerPage/FlipCard';
import Card1 from '../JobOpprtunities/Cards';
import '../../css/Outlook.css';


function Outlook () {
    return (
        <div>
           <h1 className="Text">Explore Many Careers</h1>
           <BootstrapCarouselComponent/>
           <Flip/>
           <Card1/>
        </div>
    )
}


export default Outlook;