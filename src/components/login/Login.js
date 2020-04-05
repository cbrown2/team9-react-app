import React from 'react'
import {Link} from "react-router-dom";
export default function Login(){
     return(
      <div className="bdy1">
  <div className="container mt-5">
    <h1 className="text-primary">Metho Code </h1>
    <form>
      <div className="form-group ">
        <label>Username</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group "> 
        <label>Password</label>
        <input type="password" className="form-control" />
      </div>
      <br />
      <Link className="btn btn-primary btn-md btn-block" to="/mainmenu">Login</Link>
      <Link className="btn btn-success btn-md btn-block" to="/register">Register</Link>
    </form>
  </div>
</div>

     
     )}