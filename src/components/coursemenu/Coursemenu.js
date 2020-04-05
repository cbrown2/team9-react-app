import React from 'react'
import {Link} from "react-router-dom";
export default function Coursemenu(){
     return(
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <Link className="navbar-brand" to="/mainmenu">Metho Code</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <div className="RbtnMargin">
        <form className="form-inline my-2 my-lg-0 RbtnMargin">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div> <li className="nav-item active">
        <Link className="nav-link" href="#">Help <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to="/login"><i className="fas fa-user" /> User</Link>
      </li>
    </ul>
  </div>
</nav>

     )}