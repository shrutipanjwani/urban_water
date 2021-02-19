import React, { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FloodRiskSolutions = () => {
  return (
    <Fragment>
      <div className="py-6 w-2/4 lg:mx-auto">
        <h2 className="text-3xl font-black">Flood Risk Solutions</h2>
        <p className="py-6">
          We need to adapt our way to live and learn to live with flooding. We
          can limit the impact of flooding by working together at a development,
          community and house level. These are some initiatives that you can
          start appllying.
        </p>

        <Tabs>
          <TabList>
            <Tab>Development</Tab>
            <Tab>Community</Tab>
            <Tab>House</Tab>
          </TabList>

          <p className="py-8">
            Green infrastructure is a cost-effective and sustainable flood
            management approach that gathers and removes water at its source.
          </p>

          <TabPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Integrate sustainable drainage system
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Use green roofs to soakaways. Make them part of the
                    landscape. This will reduce their costs and increase the
                    quality of your development.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Re-use water within buildings
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Re-use rainwater for the irrigation of plants, gardens and
                    also within buildings. Design development with temperate
                    climate areas in which water is used.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Design with flooding as a principle
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    It is easy to forget that flood water can be part of the
                    development. Although we can protect dwelling we can also
                    make the external areas enjoyable and part of the flood
                    zone.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Create Zero carbon developments
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Zero carbon will reduce climate change and in turn the risk
                    and impact of future flooding.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>

          <TabPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Retrofit Sustainable Drainage System within the landscape
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Retrofit Sustainable Drainage System does not need to be
                    expensive. It can start with simple water gardens in
                    community centers to start gardens instade of separating
                    bays.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Greening the streets
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Greening the streets can vary from branches with plants to
                    garden walls. This interventions allows water to slow down
                    and reduce the volumes further downstream.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Reduce your carbon footprint
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Drive less and walk more. Although this is not possible
                    every where. You can start by looking at your local
                    Car-share initiatives or start by simply using less packing.
                    Every little counts when reducing climate change and the
                    impcat of flooding on your house and livelihood.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Support local flood management initiatives
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    There are great groups out there! You can join the local
                    group that cleans and protects your local rivers.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>

          <TabPanel>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Install Green Roofs
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    This is the easiest way to help reduce the run-off of your house and reducing the impact of flooding. You can start small. Try installing a green roof on your shed. There a great videos out there showing you how to do it.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Build rain water gardens
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    This is cool way of creating a lovely garden while using the rainwater. You can also use a planters and create a waterfall as part of your garden.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Install water resilient and resistant intervention
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    This intervention depend on the water depth. the shallow the water (less than 300mm or 1feet) you may be able to keep the water out of the house by using flood gates or have pumping system. If the water is deeper, you can use materials that are water resistant and can be cleaned easily.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Contact your local MP to check on flood defences progress
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    There is nothing better that a follow-up. Send a letter to your local MP asking for an update on the flood defences or initiatives that have been put in place for your area by the Environment Agency (Central Government)
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
        </Tabs>
      </div>
    </Fragment>
  );
};

export default FloodRiskSolutions;
