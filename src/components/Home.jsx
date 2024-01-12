import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/top-view-fillet.webp"
import { Parallax } from "react-scroll-parallax";

const keep = () => {
    return (
        <div className="home-css main-div" >
            <div className="col1" />
            <div className="col2" />
            <div className="col3">
                <h1 className="display-5">Hey!</h1>
                <h5 className="home-css lead p-5">
                    We are a couple of culinary enthusiast on a mouth-watering quest through Reykjavík, 
                    searching for the best tenderloin in the city. 
                </h5>
                <h5 className="lead px-5">
                    With an insatiable appetite, we explore diverse restaurants, 
                    from cozy local bistros to upscale dining establishments.
                </h5>
                <h5 className="lead p-5">
                    Our journey is a flavorful adventure, sampling tenderloin in every style and 
                    preparation imaginable, determined to find the ultimate culinary gem.
                </h5>
                <h1 className="pb-5 display-5"><Link className="" to="/reviews">Check out our reviews!</Link></h1>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home-css main-div">
            <div className="div1">
                <div className="div1-1">
                    <h1 className="">Exquisito</h1>
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
                        <h1><Link className="rlink" to="/reviews">Check out our reviews!</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;