import React, { useContext, useEffect, useState } from "react";
import { Zoom } from "ol/control";
import MapContext from "../Map/MapContext";

const ZoomControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;
		let ZoomControl = new Zoom({});
		map.controls.push(ZoomControl);
		let zoom = map.getView().getZoom();
		map.getView().setZoom(zoom + 1);
	}, [map]);

	return null;
};

export default ZoomControl;