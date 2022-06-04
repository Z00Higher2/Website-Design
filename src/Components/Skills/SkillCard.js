import React from 'react'
import '../../css/SkillCard.css'

const Skills = () => {
    return(
        <div>
           <div class="container-head">
      
            <div class="col-12 col-lg-6 align-left">
                <h1 class="mbr-section-title mbr-white mbr-fonts-style mb-4 display-2" id="head3">Skills</h1>
                <h1 class="mbr-text mbr-semibold mbr-fonts-style mb-4 display-7" id="par2">Required As a Computer Scientist</h1>
               
    </div>       
    <h1 className="Skill-Head">Hard Skill vs Soft Skill</h1>
        
        <li className="cards-item fourth">
        <div className="Skills1">
        <div className="card" id="CARDS">
        <div className="card-container1">
       <div className="card-title"><h1>Hard Skills </h1></div>
       <p className="card-text description">“Hard skills are the specific abilities you use to succeed in your daily job. When it comes to IT, a lot of these skills are technical in nature. They’re important for computer science candidates to list on their résumés. Many of the skills below are ones you learn as a WGU student.”</p>
      </div>
      </div>
      </div>
      <div className="Skills2">
      <div className="card" id="CARDS" >
        <div className="card-container2">
       <div className="card-title"><h1>Soft Skills </h1></div>
       <p className="card-text description">“Soft skills are sometimes broadly called “people skills.” They’re the intangible qualities you bring to a job that are vital to how you interact with others. Soft skills can even impact your ability to perform the technical aspects of your job. The following skills are important for your success in IT.”</p>
      </div>
      </div>
      </div>
      <h1 className="Skill-Head2">How are they both being Utilized</h1>
      <div className="Skills3">
      <div className="card" id="CARDS">
        <div className="card-container3">
       <div className="card-title"><h1>Soft Skills Utility </h1></div>
       <p className="card-text description">Some of these soft skills are listed below:
<li> Observant</li>
<li>Creativity</li>
<li>Communication</li>
<li>Time management </li>
<li>Teamwork and cooperation</li>
<li>Analysis</li>
<li>Organization</li>
<li>Training and teaching</li>
</p>
      </div>
      </div>
      </div> 
      <div className="Skills4">
      <div className="card" id="CARDS">
        <div className="card-container4">
       <div className="card-title"><h1>Hard Skills Utility</h1></div>
       <p className="card-text description">Some of these hard skills that can be very useful and vital for many projects are:
       <li>Computer and Technology Skills:</li>
       <li>Data Analysis:</li>
       <li>Software Development:</li>
       <li>Technical Writing:</li>
       <li>Mathematics:</li>
       </p>
      </div>
      </div>
      </div>
    </li>
    </div>
        </div>
    )
}

export default Skills;