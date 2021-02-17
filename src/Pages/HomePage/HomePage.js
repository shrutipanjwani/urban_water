import React, { Fragment, useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import OurServices_card from "../../components/OurServices_card/OurServices_card";
import ExploreUrban_card from "../../components/ExploreUrban_card/ExploreUrban_card";

const HomePage = () => {
  return (
    <Fragment>
      <Searchbar />
      <OurServices_card />
      <ExploreUrban_card />
    </Fragment>
  );
};

export default HomePage;
