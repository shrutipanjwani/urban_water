import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";

const TileLayer = ({ source, layerName = '' }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;
		
		let tileLayer = new OLTileLayer({
			source,
			// zIndex: zIndex,
			name: layerName
		});

		map.addLayer(tileLayer);
		console.log(map.getLayers())
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
