import React from 'react'

export default function Codetranslator(){
     return(
     <div>
  <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Metho Code</a>
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
            <a className="nav-link" href="#">Help <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="{/Login}"><i className="fas fa-user" /> User</a>
          </li>
        </ul>
      </div>
    </div></nav>
  <div className="container">
    <h2 className="frm">From</h2>
    <h2 className="to">To</h2> 
    <div>
      <button type="button" className="but2">React</button>
      <button type="button" className="but2">React</button>
    </div>
    <div className="dropdown1">
      <button className="dropbtn">Sample Programs</button>
      <div className="dropdown1-content">
        <a href="#">C++</a>
        <a href="#">JavaScript</a>
        <a href="#">React</a>
      </div>
    </div> 
    <hr />
    <br />
    <div>
      <div>
        <h2 className="label1">React</h2>
        <p className="colum1">
        </p>
      </div> 
      <div>
        <p className="colum2" />
        <h2 className="label2">C++</h2>
      </div>  
      <div className="container">
        <p className="box1">lorem ipsum</p>
      </div>
    </div>
    <nav className=" navbar navbar-dark bg-primary fixed-bottom">
      <span />
      <a className="text-light" href="#">
        <i className="fas fa-user" />
      </a>
    </nav>
  </div></div>

     
     )}