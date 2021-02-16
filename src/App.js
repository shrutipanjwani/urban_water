import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ResultPage from "./Pages/ResultPage/ResultPage";
import HomePage from "./Pages/HomePage/HomePage";
import { root } from "postcss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="lg:container mx-auto">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/result-page" component={ResultPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
