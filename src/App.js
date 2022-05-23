import React from 'react';
import ReactDOM from 'react-dom';
import About from './About'
import Outlook from './Outlook'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {
    BrowserRouter, Routes,
    Route,
  } from "react-router-dom";
import './App.css';

export default function App() {
    return (
        <div className="app">
            
            
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/outlook" element={<Outlook/>} />
            </Routes>
            <Footer />
            </BrowserRouter>

            
           

        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));
