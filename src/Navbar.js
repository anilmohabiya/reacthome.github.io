import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
      <>
      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">ASQUERO</NavLink>
    
  </div>
</nav>
      </div>
      </div>
      </div>
     
      </>
    );
};
export default Navbar;