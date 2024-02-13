import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/users";
import { useAuthStore } from "../store/authStore";

const Signin = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const url = "https://exquisito-web.onrender.com/api/v1/auth/sign_in";
        const form = new FormData();
        form.append("email", email);
        form.append("password", password);

        (async () => {
            try {
                const res = await login(form);
                if (res.status === 200) {
                    navigate(-1);
                }
            } catch (error) {
                console.log('Error loggin in: ', error);
            }
        })();

        /*axios.post(url, form)
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
                navigate(-1);
            }).catch((res) => {
                console.log(res);
            });*/
    };

    return (
        <div className="h-100 container-fluid sign-in-out-background" >
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="mask gradient-custom-3 offset-lg-6">
                    <div className="card text-white blur-effect" >
                        <div className="card-body p-5">

                            <form className="" onSubmit={(event) => onSubmit(event)}>
                                
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
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        className="form-control form-control-lg"
                                        onChange={(event) => onChange(event, setPassword)}
                                        />
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit"
                                        className="btn custom-button text-white">Sign in</button>
                                </div>

                            </form>
                            
                            <p className="text-center text-muted mt-4">Need an account? <Link to="/signup"
                                className="fw-bold text-body"><u>Register here</u></Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;