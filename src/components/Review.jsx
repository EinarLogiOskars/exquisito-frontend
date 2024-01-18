import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
import { getReview } from "../api/reviews";
import RecentCard from "./RecentCard";

const Review = (props) => {
    const params = useParams();
    const [review, setReview] = useState();
    const [isLoading, setLoading] = useState(true);
    const recent = JSON.parse(localStorage.getItem('recentReviews'));

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

    const recentReviews = recent.map((review, index) => (
        <div key={index}>
            <RecentCard 
                img={review.image}
                restaurantName={review.restaurant_name}
                reviewDate={review.review_date}
                id={review.id} />
        </div>
    ));

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
            <div className="div1">
                <section className="top-section">
                    <div className="">
                        <h5><Link className="rev-link" to="/reviews">Reviews</Link> <span className="h5-span">|</span> {review.restaurant_name}</h5>
                    </div>
                    <hr className="top-section-hr" />
                </section>
                <section className="main-section">
                    <div className="review-body">
                        <img 
                            src={review.image}
                        />
                        <h1>{review.restaurant_name}</h1>
                        <p>{new Date(review.review_date).toLocaleString('en-GB', {day:'numeric', month:'short', year:'numeric'})}</p>
                        <div className="review-text" dangerouslySetInnerHTML={{ __html: `${review.review_body}`}} />
                        <hr/>
                        <div className="rating">
                            <div className="rating-breakdown">
                                <ul>
                                    <li><label>Tenderloin: {review.tenderloin_rating}/10</label></li>
                                    <li>Menu: {review.menu_rating}/10</li>
                                    <li>Service: {review.service_rating}/10</li>
                                    <li>Decor: {review.decor_rating}/10</li>
                                    <li>Price: {review.price_rating}/10</li>
                                </ul>
                            </div>
                            <div className="rating-total">
                                <h5>Total rating</h5>
                                <h1>{review.total_rating}/10</h1>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="latest-reviews">
                            <h3>Latest reviews</h3>
                            <hr />
                            
                            <>{recentReviews}</>
                        </div>
                    </div>
                </section>
                <Comments token={props.token} setToken={props.setToken} reviewId={params.id} />
            </div>
        </div>
    );
};

export default Review;