import Card from "react-bootstrap/Card";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Homepage.css';
import List1 from './List1.js';
import List2 from './List2.js';
import List3 from './List3.js';

export default function Cards1() {
  return (
    <>
      <Card data-aos="fade-up" className="cards" style={{ width: 580, height: 750, margin: 20, border: "solid" }}>
        <Card.Body>
          <Card.Title style={{ color: "black" }}><h1 className="header2" data-aos="fade-up">BASIC SERVICE</h1></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          <p className="header2" data-aos="fade-up">Describe important details like price, value, length of service</p>
          </Card.Subtitle>
          <Card.Text>
          
          <p className="header2" data-aos="fade-up"><List1/></p>
                       
          </Card.Text>
          <Card.Link href="#"> <button data-aos="fade-up" className="button2" style={{ color: "black" , background: "white", border: "solid"}}><span className = "btn-span">Learn More</span></button></Card.Link>
        </Card.Body>
       </Card>
       <Card data-aos="fade-up" className="cards" style={{ width: 580, background: "#5A5A5A",margin: 20, border: "solid"  }}>
        <Card.Body>
          <Card.Title style={{ color: "silver" }}><h1 className="header3"data-aos="fade-up">INTERMEDIATE SERVICE</h1>  
            </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          <p className="header2" data-aos="fade-up">Describe important details like price, value, length of service</p>
          </Card.Subtitle>
          <Card.Text>
          <p className="header2" data-aos="fade-up"><List2/></p>
          </Card.Text>
          <Card.Link href="#"> <button data-aos="fade-up" className="button2" style={{ background: "#5A5A5A"}}><span className = "btn-span">Learn More</span></button></Card.Link>
        </Card.Body>
        </Card>

        <Card data-aos="fade-up" className="cards" style={{ width: 580, background: "black", margin: 20, border: "solid"}}>

        <Card.Body>
          <Card.Title style={{ color: "white" }}><h1 className="header4" data-aos="fade-up">ADVANCED SERVICE</h1></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          <p className="header2" data-aos="fade-up">Describe important details like price, value, length of service</p>
          </Card.Subtitle>
          <Card.Text>
          <p className="header2" data-aos="fade-up"><List3/></p>
          </Card.Text>
          <Card.Link href="#"> <button data-aos="fade-up" className="button2" ><span className = "btn-span">Learn More</span></button></Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}