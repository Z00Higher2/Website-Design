import React from 'react';
import '../../css/FlipCard.css';

const Flip = () =>{
    return(
        <div>
             <div className="row row-cols-1 row-cols-md-2 g-4"></div>
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZmfAyDnAC7bAqRQCZ8EIQwAS0kXL5s185A&usqp=CAU.jpg" alt="Avatar" style-prop-object="width:300px;height:300px;"/>
    </div>
    <div className="flip-card-back">
      <p className="Description">Computer engineering is the branch of engineering that integrates electronic engineering with computer sciences. Computer engineers design and develop computer systems and other technological devices.Computer hardware engineers "research, design, develop and test computer systems and components such as processors, circuit boards, memory devices, networks and routers," according to the U.S. Bureau of Labor Statistics (BLS).Computer hardware engineers usually work in research laboratories that build and test various types of computer models. Most work in computer systems design services and in manufacturing.</p>
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O.jpg" alt="Avatar" style-prop-object="width:300px; height:300px;"/>
    </div>
    <div className="flip-card-back">
      <p className="Description">Computer programmers write, modify, and test code and scripts that allow computer software and applications to function properly.Programmers usually work in office settings, most commonly in the computer systems design and related services industry. Most computer programmers work full time.Computer programmers typically need a bachelor’s degree to enter the occupation. Most programmers specialize in several programming languages.</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://www.tutorialspoint.com/basics_of_computer_science/images/computer_networking.jpg" alt="Avatar" style-prop-object="width:300px;height:300px;"/>
    </div>
    <div className="flip-card-back">
      <p className="Description"> Network and computer systems administrators are responsible for the day-to-day operation of computer networks. Network and computer systems administrators work with the physical computer networks of a variety of organizations and therefore are employed in many industries. Most employers require network and computer systems administrators to have a bachelor’s degree in a field related to computer or information science. Others may require only a postsecondary certificate or an associate’s degree.</p>
      
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://www.codespaces.com/wp-content/uploads/2020/03/ITSupport.jpg" alt="Avatar" style-prop-object="width:300px;height:300px;"/>
    </div>
    <div className="flip-card-back">
      <p className="Description">Computer support specialists maintain computer networks and provide technical help to computer users. Most computer support specialists work full time. Because computer support services may need to be available 24 hours a day, some specialists work nights or weekends. Entry requirements vary for computer support specialists. Network support specialists typically need an associate’s degree, and user support specialists typically need to complete some college courses. However, candidates may qualify with a high school diploma plus relevant information technology (IT) certifications.</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://itcareercentral.com/wp-content/uploads/2015/02/software-engineer-job-description.png" alt="Avatar" style-prop-object="width:300px;height:300px;"/>
    </div>
    <div className="flip-card-back">
      <p className="Description">Software developers design computer applications or programs. Software quality assurance analysts and testers identify problems with applications or programs and report defects. Many software developers, quality assurance analysts, and testers work in computer systems design and related services, in manufacturing, or for software publishers. They often work in offices and on teams with other software developers or quality assurance analysts and testers. Software developers, quality assurance analysts, and testers typically need a bachelor’s degree in computer and information technology or a related field. Some employers prefer to hire developers who have a master’s degree.</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://s27389.pcdn.co/wp-content/uploads/2021/04/creating-rolling-out-effective-cyber-security-strategy-1024x440.jpeg.optimal.jpeg" alt="Avatar" style-prop-object="width:300px;height:300px;"/>
    </div>
    <div className="flip-card-back">
      <p className="Description">Information security analysts plan and carry out security measures to protect an organization’s computer networks and systems. Most information security analysts work for computer companies, consulting firms, or business and financial companies. Information security analysts typically need a bachelor’s degree in a computer science field, along with related work experience. Employers may prefer to hire analysts who have professional certification.</p>
    </div>
  </div>
</div>
</div>

    )
}

export default Flip;