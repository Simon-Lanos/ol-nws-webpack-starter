import './source.scss';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {transform} from 'ol/proj';

// coordonnées récupérées depuis https://www.latlong.net/convert-address-to-lat-long.html
const nws = transform([1.066530, 49.428470], 'EPSG:4326', 'EPSG:3857');

const map = new Map({
  interactions: defaultInteractions().extend([
    new DragRotateAndZoom()
  ]),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'carteNWS',
  view: new View({
    projection: 'EPSG:3857',
    center: nws,
    zoom: 14
  })
});
