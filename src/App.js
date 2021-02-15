import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import OurServices_card from "./components/OurServices_card/OurServices_card";


import ExploreUrban_card from "./components/ExploreUrban_card/ExploreUrban_card";
import Footer from "./components/Footer/Footer";
import ResultPage from "./Pages/ResultPage/ResultPage"

const App = () => {
  

  return (
    <Router>
      <Navbar />
      <Searchbar />
      <OurServices_card />
      <ExploreUrban_card />
      <Footer />
      <ResultPage />
      
    </Router>
  );
};

export default App;
