import { useState } from "react";

const Way_data: GeoJSON.FeatureCollection = {
    "type": "FeatureCollection",
    "features": [
        {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": [
            [
                -8.878047162039593,
                37.74927144245389
            ],
            [
                -35.47133887278741,
                -6.378855831542566
            ],
            [
                -8.69167779842374,
                -70.98598293074521
            ],
            [
                19.78576075154612,
                -34.37190709165173
            ],
            [
                115.21585879332508,
                -34.181579913969315
            ]
            ],
            "type": "LineString"
        }
        }
    ]
}

const start_way: GeoJSON.FeatureCollection = {
    "type": "FeatureCollection",
    "features": [
        {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "coordinates": [
            [
                -8.878047162039593,
                37.74927144245389
            ]
        ],
        "type": "LineString"
        }
    }
    ]
}

export default Way_data;