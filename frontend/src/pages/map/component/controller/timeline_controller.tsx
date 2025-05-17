import { useMapContext } from "../../../../context/map/map_context";
import React, { PropsWithChildren, useEffect } from "react";
import { LatLngExpression, Map } from "leaflet";

type Props = {
    map: Map;
};

type Way = {
    [key: number]: {
        zoom: number,
        geo_data: LatLngExpression
    }
}

const way_data: Way = {
    0: {
        zoom: 3,
        geo_data: [56, 20]
    },
    1: {
        zoom: 5,
        geo_data: [30, -10]
    },
    2: {
        zoom: 3,
        geo_data: [0, -40]
    },
    3: {
        zoom: 3,
        geo_data: [-70, -10]
    },
    4: {
        zoom: 4,
        geo_data: [30, 0]
    },
}

const TimeLineController: React.FC<PropsWithChildren<Props>> = ({ map }) => {
    const { stage, setViewContext } = useMapContext();

    useEffect(() => {
        // Используем setTimeout для гарантии выполнения после текущего цикла событий
        const way = way_data[stage]
        setViewContext(way.geo_data, way.zoom, {animate: true, duration: 1, easeLinearity: 0.5});
        
    }, [stage]);

    return null;
};

export default TimeLineController;