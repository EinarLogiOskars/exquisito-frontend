import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { getReview } from "../api/reviews";
import RecentCard from "../components/RecentCard";
import axios from "axios";

const Review = (props) => {
    const navigate = useNavigate();
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
    
    const deleteReview = () => {
        const url = `https://exquisito-web.onrender.com/api/v1/reviews/${params.id}`;
        const headers = JSON.parse(props.token)
        axios
            .delete(url, { headers: {
                "uid": headers['uid'],
                "client": headers['client'],
                "access-token": headers['uToken']
            } } )
            .then((res) => {
                console.log(res)
                navigate("/reviews");
        });
            
    };

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
                        <button className="custom-button btn" onClick={deleteReview}>Delete</button>
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
                                    <li><div>Tenderloin:</div> <div>* * * * *</div> <div>{review.tenderloin_rating}/5</div></li>
                                    <li><div>Menu:</div> <div>* * * * *</div> <div>{review.menu_rating}/5</div></li>
                                    <li><div>Service:</div> <div>* * * * *</div> <div>{review.service_rating}/5</div></li>
                                    <li><div>Decor:</div> <div>* * * * *</div> <div>{review.decor_rating}/5</div></li>
                                    <li><div>Price:</div> <div>* * * * *</div> <div>{review.price_rating}/5</div></li>
                                </ul>
                            </div>
                            <div className="rating-total">
                                <h4>Total rating</h4>
                                <h1>{review.total_rating}/5</h1>
                                <h4>* * * * *</h4>
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