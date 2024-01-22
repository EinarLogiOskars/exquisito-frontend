import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Reviews from "./pages/Reviews.jsx";
import Review from "./pages/Review.jsx";
import NewReview from "./pages/NewReview.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Signout from "./pages/Signout.jsx";
import Navbar from "./components/Navbar.jsx";
import useToken from "./hooks/useToken.js";

function App() {
  const location = useLocation();
  const { token, setToken, removeToken } = useToken();
  const [mainBodyClass, setMainBodyClass] = useState('');

  useEffect(() => {
      window.addEventListener('scroll', stickNav);
      return () => window.removeEventListener('scroll', stickNav);
  }, []);

  const stickNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setMainBodyClass('padding180') : setMainBodyClass('');
    }
  }

  const renderNav = () => {
      if(location.pathname !== "/") {
          return <Navbar token={token} removeToken={removeToken} />;
      }
  };

  return (
    <div className="main-app-container">
        {renderNav()}
        <div className={`main-body-container ${mainBodyClass}`}>
          <Routes>
              <Route path="/" element={<Welcome token={token} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/review/:id" element={<Review token={token} setToken={setToken} />} />
              <Route path="/review" element={<NewReview />} />
              <Route path="/signup" element={<Signup setToken={setToken} />} />
              <Route path="/signin" element={<Signin setToken={setToken} />} />
              <Route path="/signout" element={<Signout token={token} setToken={setToken} />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
