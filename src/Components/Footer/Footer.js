import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../../css/Footer.css';

const Footer = () => {
   return(
       <body>
       <div>
           
<footer className="bg-dark text-center text-white" id="footer">
 
  <div className="container p-4" id="container">
   
    <section className="mb-4">
      
    
    

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"><SocialIcon url="https://google.com"/></i
      ></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"><SocialIcon url="https://linkedin.com"/></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"><SocialIcon url="https://github.com"/></i
      ></a>

    
    </section>

    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up to join the Community</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>

    
  </div>

  <div className="text-center p-3" style-prop-object="background-color: rgba(0, 0, 0, 0.2)">
  © 2022 Copyright:
    <a className="text-white" href=" https://www.richmondhillhs.org//"> RHHS Homepage</a>
  </div>
</footer>
       </div>
       </body>
       
   )
};

export default Footer;