import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken"

const Signup = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const { setToken } = useToken();

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const url = "https://exquisito-web.onrender.com/api/v1/auth";
        const form = new FormData();
        form.append("username", username);
        form.append("email", email);
        form.append("password", password);
        form.append("password_confirmation", passConfirm);

        axios.post(url, form)
            .then((res) => {
                console.log(res);
                const userToken = {
                    client: res.headers['client'],
                    uid: res.headers['uid'],
                    uToken: res.headers['access-token'],
                    username: res.data.data.username,
                    id: res.data.data.id
                };
                props.setToken(JSON.stringify(userToken));
                navigate("/reviews");
            }).catch((res) => {
                console.log(res);
            });
    };

    return (
        <div className="h-100 container-fluid sign-in-out-background" >
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="mask gradient-custom-3 mt-5">
                    <div className="card text-white blur-effect">
                        <div className="card-body p-5">

                            <form onSubmit={(event) => onSubmit(event)}>

                                <div className="form-outline mb-3">
                                    <input 
                                        type="email" 
                                        name="email"
                                        id="email"
                                        required
                                        className="form-control form-control-lg"
                                        onChange={(event) => onChange(event, setEmail)}
                                        />
                                    <label className="form-label" htmlFor="email">Your Email</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input 
                                        type="text" 
                                        name="username"
                                        id="username"
                                        required
                                        className="form-control form-control-lg"
                                        onChange={(event) => onChange(event, setUsername)}
                                        />
                                    <label className="form-label" htmlFor="username">Your Username</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        className="form-control form-control-lg"
                                        onChange={(event) => onChange(event, setPassword)}
                                        />
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        name="passConfirm"
                                        id="passConfirm"
                                        required
                                        className="form-control form-control-lg"
                                        onChange={(event) => onChange(event, setPassConfirm)}
                                        />
                                    <label className="form-label" htmlFor="password">Confirm Password</label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit"
                                        className="btn custom-button text-white">Register</button>
                                </div>
                                <p className="text-center text-muted mt-3">Have already an account? <Link to="/signin"
                                    className="fw-bold text-body"><u>Login here</u></Link></p>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;