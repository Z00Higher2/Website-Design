import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import About from './Components/About/About.js';
import Service from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';
import More from './Components/More/More.js'
import {
    BrowserRouter, Routes,
    Route,
  } from "react-router-dom";
import React from "react";
import './App.css';
import Homepage from './Components/Homepage/Homepage.js';

export default function App() {
    

    return(
        <div className= "app">         
            
            <Navbar/>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Services" element={<Service/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/More" element={<More/>}/>

            </Routes>
            </BrowserRouter>
            <Footer/>
            </div>
           

               

    )
}


ReactDOM.render(<App/>, document.getElementById('root'));
