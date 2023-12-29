import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewReview = () => {
    const navigate = useNavigate();
    const [restaurant_name, setRestaurantName] = useState("");
    const [review_date, setReviewDate] = useState("");
    const [body, setBody] = useState("");
    const [tenderloin_rating, setTenderloinRating] = useState("");
    const [sides_rating, setSidesRating] = useState("");
    const [menu_rating, setMenuRating] = useState("");
    const [price_rating, setPriceRating] = useState("");
    const [decor_rating, setDecorRating] = useState("");
    const [service_rating, setServiceRating] = useState("");
    const [total_rating, setTotalRating] = useState("");
    const [image, setImage] = useState("");

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };


    const onSubmit = (event) => {
        event.preventDefault();
        const url = "https://exquisito.onrender.com/api/v1/reviews/create";

        if (restaurant_name.length == 0 || review_date.length == 0 || body.length == 0 || tenderloin_rating.length == 0 || sides_rating.length == 0 || 
            menu_rating.length == 0 || price_rating.length == 0 || decor_rating.length == 0 || service_rating.length == 0 || total_rating.length == 0 || 
            image.length == 0) {
                return;
        };

        const form = new FormData();
        form.append('restaurant_name', restaurant_name);
        form.append('review_date', review_date);
        form.append('body', body);
        form.append('image', image);
        form.append('tenderloin_rating', tenderloin_rating);
        form.append('sides_rating', sides_rating);
        form.append('menu_rating', menu_rating);
        form.append('price_rating', price_rating);
        form.append('decor_rating', decor_rating);
        form.append('service_rating', service_rating);
        form.append('total_rating', total_rating);
        
        axios
            .post(url, form)
            .then((res) => {
                if(res.status == 200) {
                    navigate(`/review/${res.data.id}`)
                };
            });
    };

    return (
        <div className="container mt-5">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                    Add a review to our food journey!
                </h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="restaurantName">Restaurant name</label>
                        <input
                            type="text"
                            name="restaurant_name"
                            id="restaurantName"
                            className="form-control"
                            required
                            onChange={(event) => onChange(event, setRestaurantName)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewDate">Date of visit</label>
                        <input
                            type="date"
                            name="review_date"
                            id="reviewDate"
                            className="form-control"
                            required
                            onChange={(event) => onChange(event, setReviewDate)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Review body</label>
                        <textarea
                            name="body"
                            id="body"
                            className="form-control"
                            required
                            onChange={(event) => onChange(event, setBody)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image url</label>
                        <input
                            name="image"
                            id="image"
                            className="form-control"
                            required
                            onChange={(event) => onChange(event, setImage)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tenderloinRating">Tenderloin rating</label>
                        <input
                            type="number"
                            name="tenderloin_rating"
                            id="tenderloinRating"
                            className="form-control"
                            max={10}
                            min={0}
                            required
                            onChange={(event) => onChange(event, setTenderloinRating)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sidesRating">Sides rating</label>
                        <input
                            type="number"
                            name="sides_rating"
                            id="sidesRating"
                            className="form-control"
                            max={10}
                            min={0}
                            required
                            onChange={(event) => onChange(event, setSidesRating)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="menuRating">Menu rating</label>
                        <input
                            type="number"
                            name="menu_rating"
                            id="menuRating"
                            className="form-control"
                            max={10}
                            min={0}
                            required
                            onChange={(event) => onChange(event, setMenuRating)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priceRating">Price rating</label>
                        <input
                            type="number"
                            name="price_rating"
                            id="priceRating"
                            className="form-control"
                            max={10}
                            min={0}
                            required
                            onChange={(event) => onChange(event, setPriceRating)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="decorRating">Decor rating</label>
                        <input
                            type="number"
                            name="decor_rating"
                            id="decorRating"
                            className="form-control"
                            max={10}
                            min={0}
                            required
                            onChange={(event) => onChange(event, setDecorRating)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceRating">Service rating</label>
                        <input
                            type="number"
                            name="service_rating"
                            id="serviceRating"
                            className="form-control"
                            max={10}
                            min={0}
                            required
                            onChange={(event) => onChange(event, setServiceRating)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="totalRating">Total rating</label>
                        <input
                            type="number"
                            name="total_rating"
                            id="totalRating"
                            className="form-control"
                            max={10}
                            min={0}
                            required
                            onChange={(event) => onChange(event, setTotalRating)}
                            />
                    </div>
                    <button type="submit" className="btn custom-button mt-3">
                        Publish Review
                    </button>
                </form>
                <Link to="/reviews" className="btn btn-link mt-3">
                    Back to reviews
                </Link>
            </div>
        </div>
    );
};

export default NewReview;