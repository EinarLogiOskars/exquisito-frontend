import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    return(
        <div className="container-fluid bg-lighter">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Exquisito</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/reviews">Reviews</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="">About us</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="">Contact us</Link></li>
                                </ul>
                            </li>
                            <form className="d-flex mx-5" role="search">
                                <input id="search" className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
                                <button className="btn btn-outline" type="submit">Search</button>
                            </form>
                        </ul>
                        <ul className="navbar-nav d-flex">
                            <li>
                                {props.token ? <button className="nav-link disabled">{JSON.parse(props.token)['username']}</button> : <></>}
                            </li>
                            <li className="nav-item">
                                {props.token ? <button className="nav-link" onClick={props.removeToken} >Sign out</button> : <Link className="nav-link" to="/signin">Sign in</Link> }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;