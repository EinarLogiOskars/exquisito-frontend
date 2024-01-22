import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/new-logo-notext.svg';

const Navbar = (props) => {

    return(
        <div className="navbar-css">
            <div className="nav-main-div">
                <div className="logo-div">
                    <Link className="" to="/home"><img className="navbar-logo"/></Link>
                </div>
                <nav id="navbar">
                    <div className="navbody">
                        <div className="link-div2">
                            <Link className="reviews-link" to="/reviews">REVIEWS</Link>
                            <Link className="about-link" to="/reviews">ABOUT US</Link>
                            <Link className="contact-link" to="/reviews">CONTACT US</Link>
                        </div>
                        <div className="link-div3">
                            {props.token ? 
                                <Link className="signout-link" to="/signout" onClick={props.removeToken} >SIGN OUT</Link> 
                                : 
                                <Link className="signin-link" to="/signin">SIGN IN / REGISTER</Link>}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;