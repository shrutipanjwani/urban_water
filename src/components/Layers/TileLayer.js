import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";

const TileLayer = ({ source, zIndex = 0, layerName = '' }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;
		
		let tileLayer = new OLTileLayer({
			source,
			name: layerName
		});

		map.addLayer(tileLayer);
		tileLayer.setZIndex(zIndex);
		console.log(map.getLayers())

		return () => {
			if (map) {
				// map.removeLayer(tileLayer);
				console.log(map.getLayers())
			}
		};
	}, [map]);

	return null;
};

export default TileLayer;
