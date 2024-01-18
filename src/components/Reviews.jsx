import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Reviews = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = "https://exquisito-web.onrender.com/api/v1/reviews";
        axios.get(url).then((res) => {
            setReviews(res.data);
            const first5 = res.data.slice(0, 5);
            localStorage.setItem('recentReviews', JSON.stringify(first5));
        })
    }, []);

    const allReviews = reviews.map((review, index) => (
        <div className="articles-css" key={index}>
            <article className="postcard bg-white" style={{borderRadius: 0 + 'px'}}>
                <a className="postcard__img_link" href="#">
                    <img className="postcard__img" src={review.image} alt="Image Title" />
                </a>
                <div className="postcard__text t-dark">
                    <h1 className="postcard__title yellow"><a href="#">{review.restaurant_name}</a></h1>
                    <div className="postcard__subtitle small">
                        <time dateTime={new Date(review.review_date).toDateString()}>
                            <i className="fas fa-calendar-alt mr-2">{new Date(review.review_date).toLocaleString("en-US", {month: "short", day: "2-digit", year: "numeric", })}</i>
                        </time>
                    </div>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                    <ul className="postcard__tagbox">
                        <li className="tag__item"><i className="fas fa-clock yellow mr-2"></i>{review.total_rating}/10</li>
                        <li className="tag__item play yellow">
                            <Link to={`/review/${review.id}`}><i className="fas fa-play mr-2">View Review</i></Link>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    ));
    
    const noReview = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                If you can read this, the webserver is getting ready. This list will automatically refresh when it's ready!
            </h4>
        </div>
    );

    return (
        <div className="reviews-css main-div container-fluid">
            <div className="div1 row">
                <section className="jumbotron jumbotron-fluid bg-beige diagonal-background2">
                    <div className="container pt-5">
                        <p className="lead text-center text-muted">
                            We're on a mission to find the best beef tenderloin in town.
                            Our journey so far? Have a look below and see where we've been.
                        </p>
                        <hr className="my-4"></hr>
                    </div>
                </section>
                <div className="diagonal-background">
                    <div className="container">
                        <div className="col p-5">
                            {reviews.length > 0 ? allReviews : noReview}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Reviews;