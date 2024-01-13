import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";
import { getReview } from "../api/reviews";

const Review = (props) => {
    const params = useParams();
    const [review, setReview] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await getReview(params.id);
                setReview(res.data);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching review: ', error);
            };
        })();
    }, [params.id]);

    if(isLoading) {
        return <p>Loading data.....</p>
    }
    
    const keep = (
        <>
            {review.image}
            {review.restaurant_name}
            {new Date(review.review_date).toDateString()}
            {review.tenderloin_rating}
            {review.sides_rating}
            {review.menu_rating}
            {review.price_rating}
            {review.decor_rating}
            {review.service_rating}
            {review.total_rating}
            <div className="secondary-color" dangerouslySetInnerHTML={{ __html: `${review.review_body}`}} />
            <Comments token={props.token} setToken={props.setToken} reviewId={params.id} />
         </>
    
    )

    return (
        <div className="review-css main-container">
            <section className="top-section">
                <div>
                    <h1>{review.restaurant_name}</h1>
                </div>
                <div>
                    <h2>{new Date(review.review_date).toDateString()}</h2>
                </div>
                <div>
                    <h5><Link className="rev-link" to="/reviews">Reviews</Link> | Review Details</h5>
                </div>
            </section>
            <section className="main-section">
                <div className="review-body">
                    <img 
                        src={review.image}
                    />
                    <div className="review-text" dangerouslySetInnerHTML={{ __html: `${review.review_body}`}} />
                    <hr/>
                    <div className="rating">
                        <div className="rating-breakdown">
                            <ul>
                                <li><label>Tenderloin rating</label></li>
                                <li>Rating 2</li>
                                <li>Rating 3</li>
                            </ul>
                        </div>
                        <div className="rating-total">
                            <h5>Total rating</h5>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h1>Sidebar</h1>
                    <br/>
                    <hr></hr>
                </div>
            </section>
        </div>
    );
};

export default Review;