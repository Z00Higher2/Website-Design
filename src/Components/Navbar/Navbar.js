import React from 'react';
import '../../css/Navbar.css';

const Navbar = () =>{
    return(
     <div>
            <nav className="navbar navbar-expand-lg bg-light" id="Nav">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h2>TECH FUTURE</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/outlook">Careers</a>
        <a className="nav-link" href="/skill">Skills</a>
        <a className="nav-link" href="/about">About</a>
      </div>
    </div>
  </div>
</nav>
     </div>
    )
}

export default Navbar;