import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import coverImg from "../assets/images/homepage-coverphoto.webp"

export default () => (
    <div className="vw-200 vh-200 primary-color d-flex align-items-center justify-content-center">
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
                    <div className="container bg-secondary bg-gradient secondary-color text-white text-center">
                        <h1 className="display-4">W e l c o m e !</h1>
                        <p className="lead">
                            <small><small><small><small>(psst! scroll down!!)</small></small></small></small>
                        </p>
                    </div>
                </div>
            </div>
            <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center position-absolute bg-white">
                <div className="jumbotron jumbotron-fluid bg-transparent">
                    <div className="container secondary-color">
                        <h1 className="display-4">Exquisito</h1>
                        <p className="lead">
                            Come along on a culinary adventure to find the best beef tenderloin in Reykjavík. <br/>
                            <small><small><small><small>(and maybe some day the world!)</small></small></small></small>
                        </p>
                        <Link
                            to="/home"
                            className="btn btn-lg custom-button"
                            role="button"
                        >
                            Enter Site
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);