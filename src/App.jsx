import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import Welcome from "./components/Welcome.jsx";
import Home from "./components/Home.jsx";
import Reviews from "./components/Reviews.jsx";
import Review from "./components/Review.jsx";
import NewReview from "./components/NewReview.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Navbar from "./components/Navbar.jsx";
import useToken from "./hooks/useToken.js";

function App() {
  const location = useLocation();
  const { token, setToken, removeToken } = useToken();

  const renderNav = () => {
      if(location.pathname !== "/") {
          return <Navbar token={token} removeToken={removeToken} />;
      }
  };

  return (
    <div className="vh-100 container-fluid d-flex flex-column px-0"> 
        {renderNav()}
        <Routes>
            <Route path="/" element={<Welcome token={token} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/review/:id" element={<Review token={token} setToken={setToken} />} />
            <Route path="/review" element={<NewReview />} />
            <Route path="/signup" element={<Signup setToken={setToken} />} />
            <Route path="/signin" element={<Signin setToken={setToken} />} />
        </Routes>
    </div>
  );
};

export default App;
