import React, { useContext, useState } from "react";
import uwContext from "../../../context/uw/uwContext";
import Map from "../../../components/Map";
import { fromLonLat } from "ol/proj";
import { Layers, TileLayer } from "../../../components/Layers";
import { Controls, FullScreenControl, ZoomControl, } from "../../../components/Controls";
import { osm, tilewms } from "../../../components/Source";

const Hazard = () => {
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
              <div id="low-hazard" onClick={(event) => {
                document.getElementById('low-hazard').className = 'selected'
                document.getElementById('medium-hazard').className = ''
                document.getElementById('high-hazard').className = ''
                setLow(true)
                setMedium(false)
                setHigh(false)
              }}>
                <div className="p-3">0.75 to 1.25</div>
                <div className="p-3">Low</div>
              </div>
              <div id="medium-hazard" onClick={(event) => {
                document.getElementById('low-hazard').className = ''
                document.getElementById('medium-hazard').className = 'selected'
                document.getElementById('high-hazard').className = ''
                setLow(false)
                setMedium(true)
                setHigh(false)
              }}>
                <div className="p-3">1.25 to 2.0</div>
                <div className="p-3">medium</div>
              </div>
              <div id="high-hazard" onClick={(event) => {
                document.getElementById('low-hazard').className = ''
                document.getElementById('medium-hazard').className = ''
                document.getElementById('high-hazard').className = 'selected'
                setLow(false)
                setMedium(false)
                setHigh(true)
              }}>
                <div className="p-3">More than 2.0</div>
                <div className="p-3">High</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 col-span-3">
          <h3 className="text-xl font-black">Hazard</h3>
          <p className="py-6">
            The higher the number the more danger
          </p>
        </div>
      </div>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} layerName="Basemap" />
          {low && <TileLayer source={tilewms("https://environment.data.gov.uk/spatialdata/risk-of-flooding-from-surface-water-hazard-0-1-percent-annual-chance/wms", "Risk_of_Flooding_from_Surface_Water_Hazard_0_1_Percent_Annual_Chance")} zIndex={1} layerName="0.75 to 1.25" />}
          {medium && <TileLayer source={tilewms("https://environment.data.gov.uk/spatialdata/risk-of-flooding-from-surface-water-hazard-1-percent-annual-chance/wms", "Risk_of_Flooding_from_Surface_Water_Hazard_1_Percent_Annual_Chance")} zIndex={2} layerName="1.25 to 2.0" />}
          {high && <TileLayer source={tilewms("https://environment.data.gov.uk/spatialdata/risk-of-flooding-from-surface-water-hazard-3-3-percent-annual-chance/wms", "Risk_of_Flooding_from_Surface_Water_Hazard_3_3_Percent_Annual_Chance")} zIndex={3} layerName="More than 2.0" />}
        </Layers>
        <Controls>
          <FullScreenControl />
          <ZoomControl />
        </Controls>
      </Map>
    </div>
  );
};

export default Hazard;
