import React, { Fragment, useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import uwContext from "../../context/uw/uwContext";

// import "react-tabs/style/react-tabs.css";
import "./ResultPage.css";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import Feature from "ol/Feature";
import { fromLonLat, get } from "ol/proj";
import Point from "ol/geom/Point";
import Tile from 'ol/layer/Tile';
import Map from "../../components/Map";
import { Layers, TileLayer, VectorLayer } from "../../components/Layers";
import { osm, vector, tilewms } from "../../components/Source";
import {
  Controls,
  FullScreenControl,
  ZoomControl,
} from "../../components/Controls";
import FloodRiskSurfaceWater from "./pageSections/FloodRiskSurfaceWater";
import FloodRiskSolutions from "./pageSections/FloodRiskSolutions";

const ResultPage = () => {
  const { selectedPlace } = useContext(uwContext);
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);

  const riverWMS = new Tile({
    source: new tilewms({
      url: "https://environment.data.gov.uk/spatialdata/risk-of-flooding-from-reservoirs-maximum-flood-extent/wms",
      params: { LAYERS: "risk-of-flooding-from-reservoirs-maximum-flood-extent", tiled: true },
    }),
    name: "Main River",
  });

  let styles = {
    Point: new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({
          color: "rgba(255,0,0,0.7)",
        }),
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
      <div className="lg:container mx-auto">
        <div
          className="grid xl:grid-cols-10 px-8 bg-white"
          style={{ marginTop: "115px" }}
        >
          <div className="col-span-2 mr-2 relative">
            <div className="absolute w-full">
              <div className="fixed">
                <div className="font-bold text-gray-600 text-xl mb-4 border-b-2 border-gray-200 p-2">
                  {selectedPlace.text}
                </div>
                <Scrollspy
                  className="scrollNav"
                  offset={-115}
                  items={[
                    "section-1",
                    "section-2",
                    "section-3",
                    "section-4",
                    "section-5",
                    "section-6",
                    "section-7",
                  ]}
                  currentClassName="is-current"
                >
                  {/* { location.pathname.match('/flood-risk-map') ? '' : <li><a href="#section-1">Summary</a></li> } */}
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
                  {/* <li>
                    <a href="#section-6">Area Benefiting From Flood Defences</a>
                  </li> */}
                  <li>
                    <a href="#section-6">Flood Warning Areas</a>
                  </li>
                  <li>
                    <a href="#section-7">Flood Risk Solutions</a>
                  </li>
                </Scrollspy>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <section id="section-1" className="min-h-screen">
              <h2 className="text-3xl font-black mb-4">
                Flood Map {selectedPlace.text}
              </h2>
              <Map center={fromLonLat(selectedPlace.center)} zoom={zoom}>
                <Layers>
                  <TileLayer source={osm()} zIndex={0} />
                  <VectorLayer
                    source={vector({
                      features: new GeoJSON().readFeatures(geojsonObject, {
                        featureProjection: get("EPSG:3857"),
                      }),
                    })}
                    style={styles.MultiPolygon}
                  />
                  <VectorLayer
                    source={vector({
                      features: [
                        new Feature({
                          geometry: new Point(fromLonLat(selectedPlace.center)),
                        }),
                      ],
                    })}
                    style={styles.Point}
                  />
                </Layers>
                <Controls>
                  <FullScreenControl />
                  <ZoomControl />
                </Controls>
              </Map>

              <div className="py-6 my-6 border border-l-0 border-r-0 border-gray-200">
                <div className="font-bold text-gray-400 text-2xl mb-4">
                  {selectedPlace.text}
                </div>
                <span className="p-2 pl-0 border-r-2 border-gray-200">
                  Flood Risk
                </span>
                <span className="p-2">4996 properties at risk of flooding</span>
              </div>

              <div className="py-6">
                <h2 className="text-3xl font-black">
                  Flood risk in {selectedPlace.text}
                </h2>
                <p className="py-4 md:w-2/4">
                  6.1% of the properties in {selectedPlace.text} at risk of
                  flooding. The vast majority (4.3%) of the properties are at
                  hight to medium flood. The Environment Agency flood map of{" "}
                  {selectedPlace.text} are shown below.
                </p>
                <strong>
                  Property type at risk of flooding in {selectedPlace.text}
                </strong>
                <div className="h-60 border my-4 bg-gray-50">Graph image</div>
                <p className="py-4 md:w-2/4">
                  The property type affected by risk in {selectedPlace.text} are
                  mostly residential.
                </p>
                <strong>
                  Property type at risk of flooding in {selectedPlace.text}
                </strong>
                <div className="h-60 border my-4 bg-gray-50">Graph image</div>
              </div>
            </section>

            <section
              id="section-2"
              className="min-h-screen border-t-2 border-gray-200 my-6 py-6"
            >
              <div className="py-6 w-2/4 lg:mx-auto">
                <h2 className="text-3xl font-black">
                  Flood Risk Rivers and Sea - Planning
                </h2>
                <p className="py-6">
                  This map covers the flood risk from rivers and sea for
                  planning purposes. This information was produced by the
                  Environment Agency to support the flood risk assessments that
                  are part of planning applications. The flood risk varies from
                  Flood Zone 1 (low risk) to Flood Zone 3 (high risk).
                  <br />
                  <br />
                  Contact us if you would like to get obtain a detailed flood
                  risk assessment.
                </p>
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
              </div>
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
            </section>

            <section
              id="section-3"
              className="min-h-screen border-t-2 border-gray-200 my-6 py-6"
            >
              <FloodRiskSurfaceWater />
            </section>

            <section
              id="section-4"
              className="min-h-screen border-t-2 border-gray-200 my-6 py-6"
            >
              <div className="py-6 w-2/4 lg:mx-auto">
                <h2 className="text-3xl font-black">Flood Risk Reservoirs</h2>
                <p className="py-6">
                  This shows the maximum extent if a reservoir were fail and
                  release its water. Ths is the worst case scenario, it's
                  unlikely that any actual flood would be this big. These data
                  are intended for emergency planning only.
                  <br />
                  <br />
                  Contact us if you would like odtain a detailed flood risk
                  assessment for your site.
                </p>
              </div>
            </section>

            <section
              id="section-5"
              className="min-h-screen border-t-2 border-gray-200 my-6 py-6"
            >
              <div className="py-6 w-2/4 lg:mx-auto">
                <h2 className="text-3xl font-black">Historic Flood Map</h2>
                <p className="py-6">
                  This shows areas of land that have been previously flooded in
                  England. It is possible that an area has been flooded but has
                  not been recorded. It is also possible that new area flood or
                  not flood at the moment. This data does not indicate if a
                  property has been flooded internally.
                  <br />
                  <br />
                  Contact us if you would like odtain a detailed flood risk
                  assessment for your site.
                </p>
              </div>
            </section>

            <section
              id="section-6"
              className="min-h-screen border-t-2 border-gray-200 my-6 py-6"
            >
              <div className="py-6 w-2/4 lg:mx-auto">
                <h2 className="text-3xl font-black">Flood warning areas</h2>
                <p className="py-6">
                  This map shows the areas where the Flood Warning Service is
                  provided by the Environment Agency. We recomend you register
                  to the service if your property is expected to flood from
                  fiver or sea.
                </p>
              </div>
            </section>

            <section
              id="section-7"
              className="min-h-screen border-t-2 border-gray-200 my-6 py-6"
            >
              <FloodRiskSolutions />
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResultPage;
