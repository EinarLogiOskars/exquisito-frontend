import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from '../store/authStore'

const Navbar = (props) => {
    const location = useLocation();
    const [stickyClass, setStickyClass] = useState('');
    const [hiddenClass, setHiddenClass] = useState('hidden');
    const loggedIn = useAuthStore(state => state.isLoggedIn());
  
    useEffect(() => {
        window.addEventListener('scroll', stickNav);
        return () => window.removeEventListener('scroll', stickNav);
    }, []);
  
    const stickNav = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 150 ? setStickyClass('sticky') : setStickyClass('');
        windowHeight > 150 ? setHiddenClass('') : setHiddenClass('hidden');
      }
    }

    const renderLogo = () => {
        return (
            <div className="logo-div">
                <Link to="/home"><img /></Link>
            </div>
        );
    };

    return(
        <div className="navbar-css">
            <div className="nav-main-div">
                {location.pathname !== "/signup" && location.pathname !== "/signin" ? renderLogo() : <></>}
                <nav id="navbar" className={`navbar ${stickyClass}`}>
                    <div className="navbody">
                        <div className={`link-div1 ${hiddenClass}`}>
                            <Link to="/home"><img /></Link>
                        </div>
                        <div className="link-div2">
                            <Link className="reviews-link" to="/reviews">REVIEWS</Link>
                            <Link className="about-link" to="/reviews">ABOUT US</Link>
                            <Link className="contact-link" to="/reviews">CONTACT US</Link>
                        </div>
                        <div className="link-div3">
                            {loggedIn ? 
                                <Link className="signout-link" to="/signout" >SIGN OUT</Link> 
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