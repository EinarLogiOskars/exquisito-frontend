import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-css main-div" >
            <div className="home-css main-div">
                <div className="home-css div1 bg-blue">
                </div>
                <div className="home-css div2 bg-white">
                    <p className="home-css p1 lead diagonal-pos">
                        <h1 className="home-css hey text-red display-5">Hey!</h1>
                        We are a couple of culinary enthusiast on a mouth-watering quest through Reykjavík, 
                        searching for the best tenderloin in the city. 
                    </p>
                    <p className="lead pt-5 diagonal-pos">
                        With an insatiable appetite, we explore diverse restaurants, 
                        from cozy local bistros to upscale dining establishments.
                    </p>
                     <p className="lead pt-5 diagonal-pos">
                        Our journey is a flavorful adventure, sampling tenderloin in every style and 
                        preparation imaginable, determined to find the ultimate culinary gem.
                    </p>
                    <h1 className="home-css rlink display-5 pt-5 diagonal-pos"><Link className="text-red" to="/reviews">Check out our reviews!</Link></h1>
                </div>
                <div className="home-css div3 bg-beige">
                </div>
            </div>
            
        </div>
    );
};

export default Home;