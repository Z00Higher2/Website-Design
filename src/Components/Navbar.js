import React from 'react'
import './Navbar.css'

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
        <a className="nav-link" href="/outlook">Outlook</a>
        <a className="nav-link" href="/contact">Contact</a>
        <a className="nav-link" href="/about">About</a>
      </div>
      <form class="form-inline">
    <input className="form-control mr-sm-2" id="search-bar" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" id= "search-btn" type="submit"> Search</button>
    </form>
    </div>
  </div>
</nav>
     </div>
    )
}

export default Navbar