import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import coverImg from "../assets/images/welcome-page.webp"
import axios from "axios";

const Welcome = () => {
    useEffect(() => {
        const url = "https://exquisito-web.onrender.com/up";
        axios
            .get(url)
            .then((res) => {
                if (res.status === 200) console.log("Web server is online!");
                else console.log("Web server booting up!");
            });
    }, []);

    const keep = () => (
        <div className="container position-relative text-center">
            <h1 className="display-4 text-beige">Exquisito</h1>
            <p className="lead">
                Come along on a culinary adventure to find the best beef tenderloin in Reykjavík. <br/>
                <small><small><small><small>(and maybe some day the world!)</small></small></small></small>
            </p>
            <Link
                to="/home"
                className="btn btn-lg custom-button-red"
                role="button"
            >
                Enter Site
            </Link>
        </div>              
    )

    return (
        <div className="welcome-css main-div">
            <div className="parallax-div">
                <img
                    className="bg-img"
                    src={coverImg} />
                <div className="parallax-inner text-white">
                    <div>
                        <h1>Exquisito</h1>
                        <Link to="/home" className="text-white enter-link">Enter site</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;