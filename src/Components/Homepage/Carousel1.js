import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';
  
export default function Carousel1() {
  return (
    <div  className= "car" style={{ display: 'block', width: "75%",}}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img 
            className="d-block w-100"
src="https://explore.quantumfiber.com/wp-content/uploads/2021/06/shutterstock_1516327862-1170x730.jpg"
            alt="Image One"  height="750"
          />
          <Carousel.Caption className="Caption">
        <h1 data-aos="fade-up">Personalized Recommendations</h1>
        <p data-aos="fade-up" className="par-1" style={{fontSize: 20, color: "white"}}>Our cutting-edge recommendation system understands your viewing habits and suggests content that matches your interests..</p>
        <button data-aos="fade-up" className="button2" ><span className = "btn-span">Learn More</span></button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img 
            className="d-block w-100"
src="https://assets.videomaker.com/2023/05/cheerful-person-live-streaming-shooter-video-games-2022-08-11-18-17-24-utc-1.jpg"
            alt="Image Two"  height="750"
          />
          <Carousel.Caption className="Caption">
          <h1 data-aos="fade-up">Vast Content Library</h1>
        <p data-aos="fade-up" className="par-1" style={{fontSize: 20, color: "white"}}> Discover exclusive, award-winning original content created by talented filmmakers and storytellers. Experience gripping narratives and exceptional performances that are guaranteed to keep you hooked.</p>
        <button data-aos="fade-up" className="button2" ><span className = "btn-span">Learn More</span></button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
src="https://s.yimg.com/uu/api/res/1.2/t3.QgZhm2X3fGn3yddKm8A--~B/aD0xMTg5O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-05/e5549830-bfbe-11eb-bd29-331b18490ec1.cf.jpg"
            alt="Image Two"    height="750"
          />
          <Carousel.Caption className="Caption">
          <h1 data-aos="fade-up">Stay Up-to-Date</h1>
        <p data-aos="fade-up" className="par-1" style={{fontSize: 20, color: "white"}}> Keep track of the latest releases and never miss out on trending content. </p>
        <button data-aos="fade-up" className="button2" ><span className = "btn-span">Learn More</span></button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}