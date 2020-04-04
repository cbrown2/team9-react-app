import React from 'react'

export default function Profile(){
     return(
    
     <main className="bdy">
  <nav className="navbar bg-primary navbar-dark">
    <span className="navbar-brand h1 mb-0">Metho Code</span> 
    <i className="fas fa-check text-light" />
  </nav>
  <div className="container">
    <form class="my-5"> 
      <div className="form-group ">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter your username here..." />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" className="form-control" id="email" placeholder="Enter your valid email here..." />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name here..." />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name here..." />
      </div>
    </form>
    <a href="mainmenu.html" className="btn btn-primary btn-block">Create User Profile</a>
    <a className="btn btn-danger btn-block" href="login.html">Logout</a>
  </div>
  <nav className="navbar bg-primary fixed-bottom">
    <span />
    <a className="text-light" href="profile.html"><i className="fas fa-user" /></a>
  </nav>
</main>

     )}