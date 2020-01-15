import {transform} from 'ol/proj';

const GPS_VAL = 'EPSG:4326';
const GEO_VAL = 'EPSG:3857';

export default function getGeoJson() {
    return {
        'type': 'FeatureCollection',
        'crs': {
            'type': 'name',
            'properties': {
                'name': GPS_VAL
            }
        },
        'features': [{
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                "coordinates": transform([1.066530, 49.428470], GPS_VAL, GEO_VAL)
            },
            'properties': {
                'sites': [
                    {
                        'name': 'Normandie Web School',
                        'description': 'École du numérique'
                    }
                ],
            }
        }, {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                "coordinates": transform([1.064670, 49.422218], GPS_VAL, GEO_VAL)
            },
            'properties': {
                'sites': [
                    {
                        'name': 'Copeaux numérique',
                        'description': 'Fab Lab pour les pauvres'
                    }
                ],
            }
        }, {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                "coordinates": transform([1.120290, 49.450932], GPS_VAL, GEO_VAL)
            },
            'properties': {
                'sites': [
                    {
                        'name': 'ISD Flaubert',
                        'description': 'École de commerce'
                    }
                ],
            }
        }]
    };
}