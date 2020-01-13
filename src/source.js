import './source.scss';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {transform} from 'ol/proj';
import {Circle as CircleStyle, Stroke, Style} from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON';

import getGeoJson from './service/GeoJsonService';
const GeoJsonObj = getGeoJson();

// coordonnées récupérées depuis https://www.latlong.net/convert-address-to-lat-long.html
const nws = transform([1.066530, 49.428470], 'EPSG:4326', 'EPSG:3857');

const image = new CircleStyle({
    radius: 5,
    fill: null,
    stroke: new Stroke({color: 'red', width: 1})
});

const styles = {
    'Point': new Style({
        image: image
    }),
};

const styleFunction = function (feature) {
    return styles[feature.getGeometry().getType()];
};

const vectorSource = new VectorSource({
    features: (new GeoJSON()).readFeatures(GeoJsonObj)
});

const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: styleFunction
});

const map = new Map({
  interactions: defaultInteractions().extend([
    new DragRotateAndZoom()
  ]),
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer
  ],
  target: 'carteNWS',
  view: new View({
    projection: 'EPSG:3857',
    center: nws,
    zoom: 14
  })
});
