import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";

const Signout = (props) => {
    const nav = useNavigate();
    const loggedIn = useAuthStore(state => state.isLoggedIn())

    useEffect(() => {
        if(loggedIn) {
            nav("/home");
        };
    }, []);

    return (
        <>Signed out!</>
    );
};

export default Signout;