import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuthStore } from '../../store/authStore'
import { logout as apiLogout } from "../../api/users";
import './Navbar.scss'

const Navbar = () => {
    const location = useLocation();
    const [stickyClass, setStickyClass] = useState('');
    const [hiddenClass, setHiddenClass] = useState('hidden');
    const loggedIn = useAuthStore(state => state.isLoggedIn());
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

    const logout = () => {
        (async () => {
            try {
                const res = await apiLogout();
                console.log(res);
            } catch (error) {
                console.log('Error logging out: ', error);
            }
        })();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <div className="">
            <div className="nav-main-div">
                {location.pathname !== "/signup" && location.pathname !== "/signin" ? renderLogo() : <></>}
                <nav id="navbar" className={`navbar ${stickyClass} ${isMenuOpen ? 'open':''}`}>
                    <div className="navbody">
                        <div className={`left-links ${hiddenClass}`}>
                            <Link to="/home"><img /></Link>
                        </div>
                        <div className="middle-links">
                            <NavLink className="reviews-link" to="/reviews">REVIEWS</NavLink>
                            <NavLink className="about-link" to="/reviews">ABOUT US</NavLink>
                            <NavLink className="contact-link" to="/reviews">CONTACT US</NavLink>
                        </div>
                        <div className="right-links">
                            {loggedIn ? (
                                <>
                                    <span className="username">Username</span>
                                    <NavLink className="signout-link" to="/signout" onClick={logout}>SIGN OUT</NavLink>
                                </>
                                ) : (
                                <NavLink className="signin-link" to="/signin">SIGN IN / REGISTER</NavLink>
                                )}
                        </div>
                    </div>
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;