import React from 'react';
import Main from './Components/StatisticsDataGraphs.js'
import Cards from './Components/CareerCard.js'
import Slides from './Components/Carousel'
import Flip from './Components/FlipCard'
import './Outlook.css';


function Outlook () {
    return (
        <div>
           <h1 className="Text">Explore Many Careers</h1>
           <Slides/>
           <Main/>
           <Flip/>   
           <Cards/>

        </div>
    )
}




export default Outlook;