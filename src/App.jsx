import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import { throttle } from "./utils/utils.js";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home/Home.jsx";
import Reviews from "./pages/Reviews.jsx";
import Review from "./pages/Review.jsx";
import NewReview from "./pages/NewReview.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Signout from "./pages/Signout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const location = useLocation();
  const [mainBodyClass, setMainBodyClass] = useState('');

  useEffect(() => {
      const throttledStickyNav = throttle(stickNav, 100);
      window.addEventListener('scroll', throttledStickyNav);
      return () => window.removeEventListener('scroll', throttledStickyNav);
  }, []);

  const stickNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setMainBodyClass('padding100') : setMainBodyClass('');
    }
  }

  const renderNav = () => {
      if(location.pathname !== "/") {
          return <Navbar />;
      }
  };

  return (
    <div className="main-app-container">
        {renderNav()}
        <div className={`main-body-container ${mainBodyClass}`}>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/review/:id" element={<Review />} />
              <Route path="/review" element={<NewReview />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signout" element={<Signout />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
