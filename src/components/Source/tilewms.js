import * as olSource from "ol/source";

function tilewms({url, layer}) {
	return new olSource.TileWMS({
		url: url,
      	params: { LAYERS: layer, tiled: true },
		// projection: 'EPSG:27700',
	});
}

export default tilewms;