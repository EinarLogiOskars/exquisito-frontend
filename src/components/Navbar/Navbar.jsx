import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuthStore } from '../../store/authStore'
import { logout as apiLogout } from "../../api/users";
import { throttle } from "../../utils/utils";
import './Navbar.scss'

const Navbar = () => {
    const location = useLocation();
    const [stickyClass, setStickyClass] = useState('');
    const [hiddenClass, setHiddenClass] = useState('hidden');
    const loggedIn = useAuthStore(state => state.isLoggedIn());
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
        const throttledStickyNav = throttle(stickNav, 100);
        window.addEventListener('scroll', throttledStickyNav);
        return () => window.removeEventListener('scroll', throttledStickyNav);
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
                alert('Error Logging out: ', error);
            }
        })();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <div className="nav-main-div">
            {location.pathname !== "/signup" && location.pathname !== "/signin" ? renderLogo() : <></>}
            <nav id="navbar" className={`navbar ${stickyClass} ${isMenuOpen ? 'open':''}`}>
                <div className={`navbar-logo ${hiddenClass}`}>
                    <Link to="/home"><img /></Link>
                </div>
                <div className={`navbody ${isMenuOpen ? 'open':''}`}>
                    <div className="hamburger-div">
                        <button className="hamburger" onClick={toggleMenu}>☰</button>
                    </div>
                    <div className={`link-container ${isMenuOpen ? 'open':''}`}>
                        <div className="middle-links">
                            <NavLink className="reviews-link" to="/reviews" onClick={toggleMenu}>REVIEWS</NavLink>
                            <NavLink className="about-link" to="/reviews" onClick={toggleMenu}>ABOUT US</NavLink>
                            <NavLink className="contact-link" to="/reviews" onClick={toggleMenu}>CONTACT US</NavLink>
                        </div>
                        <div className="right-links">
                            {loggedIn ? (
                                <>
                                    <span className="username">Username</span>
                                    <NavLink className="signout-link" to="/signout" onClick={logout}>SIGN OUT</NavLink>
                                </>
                                ) : (
                                <NavLink className="signin-link" to="/signin" onClick={toggleMenu}>SIGN IN / REGISTER</NavLink>
                                )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;