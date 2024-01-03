import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import coverImg from "../assets/images/homepage-coverphoto.webp"
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

    return (
        <div className="vw-200 vh-200 d-flex align-items-center justify-content-center">
            <div className="column">
                <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center border">
                    <Parallax translateY={[-70,70]}>
                        <div className="vw-100 vh-100 primary-color d-flex align-items-start justify-content-start border">
                            <img
                                src={coverImg}
                                className="img-fluid opacity-50 vh-100 vw-100"
                            />
                        </div>
                    </Parallax>
                    <div className="jumbotron jumbotron-fluid position-absolute">
                        <div className="container bg-blue bg-gradient text-white text-center border">
                            <h1 className="display-4 px-3">W e l c o m e !</h1>
                            <p className="lead">
                                <small><small><small><small>(psst! scroll down!!)</small></small></small></small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="vw-100 vh-100 d-flex position-absolute bg-beige overflow-hidden">
                    <div className="h-100 d-flex justify-content-center">
                        <div className="offset-lg-6 bg-red diagonal-neg width-150 height-100 position-absolute" />
                        <div className="bg-blue diagonal-neg height-100 width-150 position-absolute" />
                        <div className="h-100 m-5 d-flex align-items-center">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;