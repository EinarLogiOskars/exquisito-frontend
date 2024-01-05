import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-css main-div" >
            <div className="diagonal-background d-flex">
                <div className="home-css col">
                    <div className="h5-1 col-lg-4">
                    <h5 className="home-css lead p-5">
                        <h1 className="text-red hey display-5">Hey!</h1>
                        We are a couple of culinary enthusiast on a mouth-watering quest through Reykjavík, 
                        searching for the best tenderloin in the city. 
                    </h5>
                    </div>
                    <div className="h5-2 col-lg-4" >
                    <h5 className="lead px-5">
                        With an insatiable appetite, we explore diverse restaurants, 
                        from cozy local bistros to upscale dining establishments.
                    </h5>
                    </div>
                    <div className="h5-3 col-lg-4">
                    <h5 className="lead p-5">
                        Our journey is a flavorful adventure, sampling tenderloin in every style and 
                        preparation imaginable, determined to find the ultimate culinary gem.
                    </h5>
                    </div>
                    <h1 className="home-css rlink pb-5 display-5"><Link className="text-red" to="/reviews">Check out our reviews!</Link></h1>
                </div>
            </div> 
        </div>
    );
};

export default Home;