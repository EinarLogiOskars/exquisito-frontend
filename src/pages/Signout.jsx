import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Signout = (props) => {
    const nav = useNavigate();

    useEffect(() => {
        if(props.token) {
            nav("/home");
        };
    }, []);

    return (
        <>Signed out!</>
    );
};

export default Signout;