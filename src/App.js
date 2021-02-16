import React, { useState, useEffect } from "react";
import "./components/FontawesomeIcons/icon";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebook } from '@fortawesome/react-fontawesome'
// import {faPhoneAlt,faTwitter,faRss,faYoutube,faMapMarkerAlt ,faEnvelope, fas } from '@fortawesome/free-brands-svg-icons'

// library.add(fab,fas, faPhoneAlt,faFacebook,faTwitter,faRss,faYoutube,faMapMarkerAlt, faEnvelope)


 import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ResultPage from "./Pages/ResultPage/ResultPage"
import HomePage from "./Pages/HomePage/HomePage"
import { root } from "postcss";

const App = () => {
  

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/result-page-:suggestion' component={ResultPage} />
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
