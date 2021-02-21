import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";

const TileLayer = ({ source, zIndex = 0, layerName = '' }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let tileLayer = new OLTileLayer({
			source,
			zIndex: zIndex,
			name: layerName
		});

		map.addLayer(tileLayer);
		// tileLayer.setZIndex(zIndex);

		// return () => {
		// 	if (map) {
		// 		map.removeLayer(tileLayer);
		// 	}
		// };
	}, [map]);

	return null;
};

export default TileLayer;
