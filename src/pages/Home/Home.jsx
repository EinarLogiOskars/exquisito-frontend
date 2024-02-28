import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss"


const Home = () => {

    useEffect(() => {
        console.log("We're home!")
        window.scrollTo(0,0)
    }, []);

    return (
        <div className="main-div">
            <div className="div1">
                <div className="div1-1">
                    <p>
                        Come along on a culinary adventure to find the best beef tenderloin in Reykjavík.
                    </p>
                    <p>
                        <small><small><small><small>(and maybe some day the world!)</small></small></small></small>
                    </p>
                </div>
                <div className="div1-parallax">
                    <div></div>
                </div>
                <div className="div1-buffer">
                    <p>
                        We are a couple of culinary enthusiast on a mouth-watering quest through Reykjavík,
                        searching for the best tenderloin in the city. 
                    </p>
                </div>
                <div className="div1-parallax2">
                    <div></div>
                </div>
                <div className="div1-buffer">
                    <p>
                        With an insatiable appetite, we explore diverse restaurants,
                        from cozy local bistros to upscale dining establishments.
                    </p>
                </div>
                <div className="div1-parallax3">
                        <div><div></div></div>
                </div>
                <div className="div1-buffer">
                    <p>
                        Our journey is a flavorful adventure, sampling tenderloin in every style and
                        preparation imaginable, determined to find the ultimate culinary gem.
                    </p>
                    <div className="linkdiv">
                        <h1><Link className="review-link" to="/reviews">Check out our reviews!</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;