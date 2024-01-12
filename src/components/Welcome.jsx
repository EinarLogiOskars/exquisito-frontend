import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import coverImg from "../assets/images/welcome-page.webp"
import axios from "axios";

const Welcome = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        const url = "https://exquisito-web.onrender.com/up";
        axios
            .get(url)
            .then((res) => {
                if (res.status === 200) console.log("Web server is online!");
                else console.log("Web server booting up!");
            });
            if (props.token) {
                navigate("/reviews");
            }
    }, []);


    return (
        <div className="welcome-css main-div">
            <div className="div">
                <img
                    className="bg-img"
                    src={coverImg} />
                <div className="inner text-white">
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