import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios'
import Searchbar from "../../components/Searchbar/Searchbar";
import OurServices_card from "../../components/OurServices_card/OurServices_card";
import ExploreUrban_card from "../../components/ExploreUrban_card/ExploreUrban_card";

const HomePage = () => {
  const [featureSet, setFeatureSet] = useState([]);

  useEffect(() => {
    const getFeatureSet = async () => {
      const featureSet = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/bo.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}&types=address,region,poi,country,district,locality,neighborhood,postcode&country=gb`
      );

    //   for(let i=0; i<featureSet.data.features)

      setFeatureSet(featureSet.data.features);
    };
    getFeatureSet();
  }, []);

  return (
    <Fragment>
      <Searchbar featureSet={featureSet} />
      <OurServices_card />
      <ExploreUrban_card />
    </Fragment>
  );
};

export default HomePage;
