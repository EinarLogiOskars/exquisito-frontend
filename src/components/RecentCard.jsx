import React from "react";
import { Link } from "react-router-dom";

const RecentCard = (props) => {
    return (
        <div className="recent-card">
            <div className="card-body">
                <img src={props.img}></img>
                <div className="card-text">
                    <Link className="clink" to={`/review/${props.id}`}><h4>{props.restaurantName}</h4></Link>
                    <p>{new Date(props.reviewDate).toLocaleString('en-GB', {day:'numeric', month:'short', year:'numeric'})}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentCard;