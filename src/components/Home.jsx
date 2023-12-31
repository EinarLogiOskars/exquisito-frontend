import React from "react";
import { Link } from "react-router-dom";

const keep = () => {
    <div className="h-100 container-fluid d-flex flex-column" >
        <div className="h-50 row pt-5 pb-3 position-absolute overflow-hidden">
            <div className="col-lg-5 bg-blue diagonal-pos" ></div>
            <div className="col-lg-5 offset-lg-6 position-relative">
                <h1 className="display-4 text-blue">Hey!</h1>
                <p className="lead">
                We are a couple of culinary enthusiast on a mouth-watering quest through Reykjavík, 
                searching for the best tenderloin in the city.<br/> With an insatiable appetite, we 
                explore diverse restaurants, from cozy local bistros to upscale dining establishments. 
                </p>
            </div>
        </div>
        <div className="h-50 row bg-light">
            <div className="col-lg-5 offset-lg-1 position-relative">
                <p className="lead pt-5">
                        Our journey is a flavorful adventure, sampling tenderloin in every style and preparation imaginable, 
                        determined to find the ultimate culinary gem.
                </p>
                <br/>
                <h1 className="display-5"><Link className="text-beige" to="/reviews">Check out our reviews</Link></h1>
            </div>
        </div>
    </div>
}

const Home = () => {

    return (
        <div className="home-css main-div" >
            <div className="border-black">
                <div className=""></div>
                <div className="">
                    <h1 className="">Hey!</h1>
                    <p className="">
                    We are a couple of culinary enthusiast on a mouth-watering quest through Reykjavík, 
                    searching for the best tenderloin in the city.<br/> With an insatiable appetite, we 
                    explore diverse restaurants, from cozy local bistros to upscale dining establishments. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;