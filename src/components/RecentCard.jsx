import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RecentCard = (props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/review/${props.id}`)
    }

    return (
        <div className="recent-card">
            <div className="card-body">
                <img src={props.img}></img>
                <div className="card-text">
                    <Link className="clink" onClick={onClick}><h4>{props.restaurantName}</h4></Link>
                    <p>{new Date(props.reviewDate).toLocaleString('en-GB', {day:'numeric', month:'short', year:'numeric'})}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentCard;