import React, { useContext, useState } from "react";
import uwContext from "../../../context/uw/uwContext";
import Map from "../../../components/Map";
import { fromLonLat } from "ol/proj";
import { Layers, TileLayer } from "../../../components/Layers";
import { Controls, FullScreenControl, ZoomControl, } from "../../../components/Controls";
import { osm, tilewms } from "../../../components/Source";

const Extent = () => {
  const { layerinfo, center, zoom } = useContext(uwContext);
  const [high, setHigh] = useState(false);
  const [medium, setMedium] = useState(false);
  const [low, setLow] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-5">
        <div className="col-span-2 border-r border-gray-300 p-8 text-center text-xs">
          <div className="grid grid-cols-5">
            <div className="col-span-1">
              <div className="p-3">Flooding likelihood</div>
              <div className="p-3">Lavel of risk</div>
            </div>
            <div className="col-span-4 grid grid-cols-4 bg-gray-100 items-center">
              <div id="low-extent" onClick={(event) => {
                document.getElementById('low-extent').className = 'selected'
                document.getElementById('medium-extent').className = ''
                document.getElementById('high-extent').className = ''
                setLow(true)
                setMedium(false)
                setHigh(false)
              }}>
                <div className="p-3">0.1%</div>
                <div className="p-3">Low</div>
              </div>
              <div id="medium-extent" onClick={(event) => {
                document.getElementById('low-extent').className = ''
                document.getElementById('medium-extent').className = 'selected'
                document.getElementById('high-extent').className = ''
                setLow(false)
                setMedium(true)
                setHigh(false)
              }}>
                <div className="p-3">1%</div>
                <div className="p-3">medium</div>
              </div>
              <div id="high-extent" onClick={(event) => {
                document.getElementById('low-extent').className = ''
                document.getElementById('medium-extent').className = ''
                document.getElementById('high-extent').className = 'selected'
                setLow(false)
                setMedium(false)
                setHigh(true)
              }}>
                <div className="p-3">3.3%</div>
                <div className="p-3">High</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 col-span-3">
          <h3 className="text-xl font-black">Extent of Flooding</h3>
          <p className="py-6">
            The extent of flooding refers to the area that could be at risk of
            flooding from surface water. This information is not to be used at
            property level.
            <br />
            <br />
            Please contact us if you need a detailed flood risk assessment.
          </p>
        </div>
      </div>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} layerName="Basemap" />
          {low && <TileLayer source={tilewms("https://environment.data.gov.uk/spatialdata/risk-of-flooding-from-surface-water-extent-0-1-percent-annual-chance/wms", "Risk_of_Flooding_from_Surface_Water_Extent_0_1_Percent_Annual_Chance")} zIndex={1} layerName="Low: 1 in 100 to 1 in 1,000" />}
          {medium && <TileLayer source={tilewms("https://environment.data.gov.uk/spatialdata/risk-of-flooding-from-surface-water-extent-1-percent-annual-chance/wms", "Risk_of_Flooding_from_Surface_Water_Extent_1_Percent_Annual_Chance")} zIndex={2} layerName="Medium: 1 in 30 to 1 in 100" />}
          {high && <TileLayer source={tilewms("https://environment.data.gov.uk/spatialdata/risk-of-flooding-from-surface-water-extent-3-3-percent-annual-chance/wms", "Risk_of_Flooding_from_Surface_Water_Extent_3_3_Percent_Annual_Chance")} zIndex={3} layerName="High: greater than 1 in 30" />}
        </Layers>
        <Controls>
          <FullScreenControl />
          <ZoomControl />
        </Controls>
      </Map>
    </div>
  );
};

export default Extent;
