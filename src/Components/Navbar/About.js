import React from 'react';
import '../../css/About.css';

const About = () =>{
    return(
        <div>
            <div class="about-section">
  <h1 className="Headline-text">About Us Page</h1>
  <p className="para-text1">Some text about who we are and what we do.</p>
  <p className="para-text2">Resize the browser window to see that this page is responsive by the way.</p>
</div>
 
<h2 style-object="text-align:center" className="about-text">Our Team</h2>
  <div class="column1">
    <div class="card">
      <div class="container">
        <h2>Zuhayer Tashin</h2>
        <p class="title">Lead Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Zuhayer@example.com</p>
      </div>
    </div>
  </div>

  <div class="column2">
    <div class="card">
      <div className="container">
        <h2>Daneyda Gonzalez</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Daneyda@example.com</p>
      </div>
    </div>
  </div>
  
  <div class="column3">
    <div class="card">
      <div class="container">
        <h2>Sumaiya Alli</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Sumaiya@example.com</p>
      </div>
    </div>
  </div>


    <div class="column4">
    <div class="card">
      <div class="container">
        <h2>Jonathan Vasquez</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Jonathan@example.com</p>
      </div>
    </div>
  </div>

     <div class="column5">
    <div class="card">
      <div class="container">
        <h2>Shahed Ismail</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Shahed@example.com</p>
      </div>
    </div>
  </div>

  <div class="column6">
    <div class="card">
      <div class="container">
        <h2>Lizet Vidal</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Lizet@example.com</p>
      </div>
    </div>
  </div>

  <div class="column7">
    <div class="card">
      <div class="container">
        <h2>Sunita Khanailall</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Sunita@example.com</p>
      </div>
    </div>
  </div>
        </div>
    )
}

export default About;