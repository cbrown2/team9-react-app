import React from 'react'

export default function Register(){
     return(
    
        <div className="bdy">
  <div className="container">
    <h1>Metho Code</h1>
    <form>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="Verify Password" />
      </div>
      <a href="profile.html" className="btn btn-primary btn-block">Register</a>
      <a href="login.html" className="btn btn-danger btn-block">Cancel</a>
    </form>
  </div>
</div>

     )}