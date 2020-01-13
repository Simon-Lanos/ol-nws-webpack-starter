const GPS_VAL = 'EPSG:4326';


export default function getGeoJson() {
    return {
        'type': 'FeatureCollection',
        'crs': {
            'type': 'name',
            'properties': {
                'name': GPS_VAL
            }
        },
        'features': []
    };
}