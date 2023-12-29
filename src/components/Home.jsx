import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="h-100 container-fluid d-flex flex-column" >
            <div className="h-50 row pt-5 pb-3" style={{backgroundColor: '#E9D5B6' }}>
                <div className="col-lg-5 offset-lg-6">
                    <h1 className="display-4">Hey!</h1>
                    <p className="lead text-muted">
                    We are a couple of culinary enthusiast on a mouth-watering quest through Reykjavík, 
                    searching for the best tenderloin in the city.<br/> With an insatiable appetite, we 
                    explore diverse restaurants, from cozy local bistros to upscale dining establishments. 
                    </p>
                </div>
            </div>
            <div className="h-50 row" style={{ backgroundColor: '#CCBBA2' }}>
                <div className="col-lg-5 offset-lg-1">
                    <p className="lead text-muted pt-5">
                            Our journey is a flavorful adventure, sampling tenderloin in every style and preparation imaginable, 
                            determined to find the ultimate culinary gem.
                    </p>
                    <br/>
                    <h1 className="display-5"><Link className="link-dark text-muted" to="/reviews">Check out our reviews</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Home;