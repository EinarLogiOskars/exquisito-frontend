import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";

const Review = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:3000/api/v1/reviews/${params.id}`;

        axios.get(url).then((res) => {
            setReview(res.data);
            setLoading(false);
        });
    }, [params.id]);

    const deleteReview = () => {
        const url = `http://localhost:3000/api/v1/reviews/destroy/${params.id}`;
        const csrfToken = document.querySelector('[name=csrf-token]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
        const headers = JSON.parse(props.token)
        /*axios
            .delete(url, { headers: {
                "uid": headers['uid'],
                "client": headers['client'],
                "access-token": headers['uToken']
            } } )
            .then((res) => {
                navigate("/reviews");
            });
            */
    };

    if(isLoading) {
        return <p>Loading data.....</p>
    }

    return (
        <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                <img
                    src={review.image}
                    alt={`${review.restaurant_name} image`}
                    className="img-fluid position-absolute"
                />
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                    {review.restaurant_name} <br/> {review.review_date}
                </h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ul className="list-group sticky-top">
                            <h5 className="mb-2">Score:</h5>
                            <li className="list-group-item">Tenderloin score: {review.tenderloin_rating}</li>
                            <li className="list-group-item">Sides score: {review.sides_rating}</li>
                            <li className="list-group-item">Menu score: {review.menu_rating}</li>
                            <li className="list-group-item">Price score: {review.price_rating}</li>
                            <li className="list-group-item">Decor score: {review.decor_rating}</li>
                            <li className="list-group-item">Service score: {review.service_rating}</li>
                            <li className="list-group-item"><h5>Total: {review.total_rating}</h5></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                        <h5 className="mb-2">Review</h5>
                        <div className="secondary-color" dangerouslySetInnerHTML={{ __html: `${review.review_body}`}} />
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={deleteReview}
                        >
                            Delete Review
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-2">
                    <Link
                        to="/reviews"
                        type="button"
                        className="btn custom-button sticky-top"
                    >
                        Back
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
                <Comments token={props.token} setToken={props.setToken} reviewId={params.id} />
            </div>
        </div>
    );
};

export default Review;