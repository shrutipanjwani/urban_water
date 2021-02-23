import React, { useRef, useState, useEffect } from "react";
import './Map.css';
import MapContext from './MapContext';
import * as ol from "ol";
import proj4 from 'proj4';
import {get as getProjection} from 'ol/proj';
import {register} from 'ol/proj/proj4';
// import Map from 'ol/Map';
// import OSM from 'ol/source/OSM';
// import TileLayer from 'ol/layer/Tile';
// import View from 'ol/View';

const Map = ({ children, projection, zoom, center }) => {
    const mapRef = useRef();
    const [map, setMap] = useState(null);
    proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 ' +
    '+x_0=400000 +y_0=-100000 +ellps=airy ' +
    '+towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 ' +
    '+units=m +no_defs');
    register(proj4);
    var proj27700 = getProjection('EPSG:27700');
    proj27700.setExtent([0, 0, 700000, 1300000]);
    // on component mount
    useEffect(() => {
      let options = {
        view: new ol.View({ projection, zoom, center }),
        layers: [],
        controls: [],
        overlays: []
      };
      let mapObject = new ol.Map(options);
      mapObject.setTarget(mapRef.current);
      setMap(mapObject);
      return () => mapObject.setTarget(undefined);
    }, []);
    // zoom change handler
    useEffect(() => {
      if (!map) return;
      map.getView().setZoom(zoom);
    }, [zoom]);
    // center change handler
    useEffect(() => {
      if (!map) return;
      map.getView().setCenter(center)
    }, [center])
    return (
      <MapContext.Provider value={{ map }}>
        <div ref={mapRef} className="ol-map">
          {children}
        </div>
      </MapContext.Provider>
    )
  }
  export default Map;