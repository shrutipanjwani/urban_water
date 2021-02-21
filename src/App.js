import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/FontAwesomeIcons/icon";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ResultPage from "./Pages/ResultPage/ResultPage";
import HomePage from "./Pages/HomePage/HomePage";
import { root } from "postcss";
import NewService from "./components/OurServices_card/NewService";
import NewCity from "./components/ExploreUrban_card/NewCity";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/result-page" component={ResultPage} />
        <Route exact path="/new-service" component={NewService} />
        <Route exact path="/new-city" component={NewCity} />

      </Switch>
      <Footer />
    </Router>
  );
};

export default App;