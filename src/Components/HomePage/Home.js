import React from 'react'
import Card from './Image-Card';
import '../../css/Home.css';

const Home = () =>{
    return(
        <div>
           <div class="container-head">
      
            <div class="col-12 col-lg-6 align-left">
                <h2 class="mbr-section-subtitle mbr-white mbr-fonts-style mb-3 display-7" id="head2">
                    <strong>Welcome to</strong>
                </h2>
                <h1 class="mbr-section-title mbr-white mbr-fonts-style mb-4 display-2" id="head1">TECH FUTURE</h1>
                <p class="mbr-text mbr-semibold mbr-fonts-style mb-4 display-7" id="par1">where we can help you look out for your career</p>
       
    </div>           
             <h1 className="another-head">Experience a New World of Technology</h1>
            <Card/>
            <div className="all-lines">
            <p className="line1">You can change the world</p>
            <p className="line2">With Over Thousands of Jobs</p>
            <p className="line3">Be Creative</p>
            <p className="line4">Code many Languages</p>
            <p className="line5">Build a New Technology</p>
            <p className="line6">Secure many sites</p>
            </div>

            <h1 className="intro"> Looking for Jobs?</h1>
            <h1 className="intro2">  Well You came at the right place</h1>
            <a href="https://www.indeed.com/q-Computer-Science-l-New-York,-NY-jobs.html?vjk=f19d561d28d56263" className="btn btn-primary btn-lg active" id="button" role="button" aria-pressed="true">Click Here</a>
        </div>
        </div>
    )
}

export default Home;