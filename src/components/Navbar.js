import React from "react";
import { Link, NavLink } from "react-router-dom";
import largelogo from "../resources/img/largelogo.svg";

const Navbar = () => {
    return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper white">
              <div className="container">
                <Link to='/' className="brand-logo" style={{paddingLeft:"0"}}><img src={largelogo} alt="" style={{width: "200px"}}/></Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to='/projects' style={{color: "#4e007c"}}>Projects</NavLink></li>
                    <li><NavLink to='/about' style={{color: "#4e007c"}}>About</NavLink></li>
                    <li><a href='https://paypal.me/magicdidac' style={{color: "#4e007c"}}>Donate</a></li>
                </ul>
              </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;