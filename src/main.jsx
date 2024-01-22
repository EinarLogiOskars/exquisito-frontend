import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ParallaxProvider>
)
