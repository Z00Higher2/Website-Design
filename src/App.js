import React from 'react';
import ReactDOM from 'react-dom';
import About from './Components/Navbar/About';
import Outlook from './Components/Navbar/Outlook';
import Home from './Components/HomePage/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/SkillCard';
import Card1 from './Components/JobOpprtunities/Cards';
import {
    BrowserRouter, Routes,
    Route,
  } from "react-router-dom";
import './css/App.css';

export default function App() {
    return (
        <div className="app">



            <Navbar/>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skill" element={<Skills/>} />
                <Route path="/outlook" element={<Outlook/>} />
            </Routes>
            </BrowserRouter>
            <Footer />  

        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));
