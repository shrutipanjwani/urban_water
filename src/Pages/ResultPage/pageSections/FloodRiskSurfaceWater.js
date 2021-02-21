import React, { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Extent from "../components/Extent";
import Depth from "../components/Depth";
import Hazard from "../components/Hazard";

const FloodRiskSurfaceWater = () => {
  return (
    <Fragment>
      <div className="py-6 w-2/4 lg:mx-auto">
        <h2 className="text-3xl font-black">Flood Risk Surface Water</h2>
        <p className="py-6">
          The flood risk from surface water is assessed in its extent depth and
          hazard.
          <br />
          <br />
          Contact us if you would like odtain a detailed flood risk assessment
          for your site.
        </p>
      </div>
      <Tabs>
        <TabList>
          <Tab>Extent</Tab>
          <Tab>Depth</Tab>
          <Tab>Hazard</Tab>
        </TabList>

        <TabPanel>
          <Extent />
        </TabPanel>
        <TabPanel>
          <Depth />
        </TabPanel>
        <TabPanel>
          <Hazard />
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};

export default FloodRiskSurfaceWater;
