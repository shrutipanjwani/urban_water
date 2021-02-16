import React, { Fragment, useState } from "react";
import Scrollspy from "react-scrollspy";
import './ResultPage.css';
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import { fromLonLat, get } from "ol/proj";

import Map from "../../components/Map";
import { Layers, TileLayer, VectorLayer } from "../../components/Layers";
import { osm, vector } from "../../components/Source";
import {
  Controls,
  FullScreenControl,
  ZoomControl,
} from "../../components/Controls";

const ResultPage = () => {
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);

  let styles = {
    Point: new Style({
      image: new CircleStyle({
        radius: 10,
        fill: null,
        stroke: new Stroke({
          color: "magenta",
        }),
      }),
    }),
    Polygon: new Style({
      stroke: new Stroke({
        color: "blue",
        lineDash: [4],
        width: 3,
      }),
      fill: new Fill({
        color: "rgba(0, 0, 255, 0.1)",
      }),
    }),
    MultiPolygon: new Style({
      stroke: new Stroke({
        color: "blue",
        width: 1,
      }),
      fill: new Fill({
        color: "rgba(0, 0, 255, 0.1)",
      }),
    }),
  };

  const geojsonObject = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          kind: "county",
          name: "Wyandotte",
          state: "KS",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-94.8627, 39.202],
                [-94.901, 39.202],
                [-94.9065, 38.9884],
                [-94.8682, 39.0596],
                [-94.6053, 39.0432],
                [-94.6053, 39.1144],
                [-94.5998, 39.1582],
                [-94.7422, 39.1691],
                [-94.7751, 39.202],
                [-94.8627, 39.202],
              ],
            ],
          ],
        },
      },
    ],
  };
  const geojsonObject2 = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          kind: "county",
          name: "Johnson",
          state: "KS",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-94.9065, 38.9884],
                [-95.0544, 38.9829],
                [-95.0544, 38.7365],
                [-94.9668, 38.7365],
                [-94.6108, 38.7365],
                [-94.6108, 38.846],
                [-94.6053, 39.0432],
                [-94.8682, 39.0596],
                [-94.9065, 38.9884],
              ],
            ],
          ],
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="grid lg:grid-cols-6" style={{ marginTop: "120px" }}>
        <div className="col-span-1 bg-gray-50">
          <Scrollspy offset={-120}
            items={[
              "section-1",
              "section-2",
              "section-3",
              "section-4",
              "section-5",
              "section-6",
              "section-7",
              "section-8",
            ]}
            currentClassName="is-current"
          >
            <li>
              <a href="#section-1">Summary</a>
            </li>
            <li>
              <a href="#section-2">Flood Risk Rivers and Sea</a>
            </li>
            <li>
              <a href="#section-3">Flood Risk Surface Water</a>
            </li>
            <li>
              <a href="#section-4">Flood Risk Reservoirs</a>
            </li>
            <li>
              <a href="#section-5">Historic Flood Map</a>
            </li>
            <li>
              <a href="#section-6">Area Benefiting From Flood Defences</a>
            </li>
            <li>
              <a href="#section-7">Flood Warning Areas</a>
            </li>
            <li>
              <a href="#section-8">Flood Risk Solutions</a>
            </li>
          </Scrollspy>
        </div>
        <div className="col-span-5">
          <section id="section-1" className="min-h-screen bg-red-50">
            <Map center={fromLonLat(center)} zoom={zoom}>
              <Layers>
                <TileLayer source={osm()} zIndex={0} />
                {showLayer1 && (
                  <VectorLayer
                    source={vector({
                      features: new GeoJSON().readFeatures(geojsonObject, {
                        featureProjection: get("EPSG:3857"),
                      }),
                    })}
                    style={styles.MultiPolygon}
                  />
                )}
                {showLayer2 && (
                  <VectorLayer
                    source={vector({
                      features: new GeoJSON().readFeatures(geojsonObject2, {
                        featureProjection: get("EPSG:3857"),
                      }),
                    })}
                    style={styles.MultiPolygon}
                  />
                )}
              </Layers>
              <Controls>
                <FullScreenControl />
                <ZoomControl />
              </Controls>
            </Map>
            <div>
              <input
                type="checkbox"
                checked={showLayer1}
                onChange={(event) => setShowLayer1(event.target.checked)}
              />{" "}
              Johnson County
            </div>
            <div>
              <input
                type="checkbox"
                checked={showLayer2}
                onChange={(event) => setShowLayer2(event.target.checked)}
              />{" "}
              Wyandotte County
            </div>
          </section>
          <section id="section-2" className="min-h-screen"></section>
          <section id="section-3" className="min-h-screen bg-red-50"></section>
        </div>
      </div>
    </Fragment>
  );
};

export default ResultPage;
