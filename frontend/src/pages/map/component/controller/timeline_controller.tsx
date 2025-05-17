import { useMapContext } from "../../../../context/map/map_context";
import React, { PropsWithChildren, useEffect } from "react";
import { Map } from "leaflet";

type Props = {
    map: Map;
};

const TimeLineController: React.FC<PropsWithChildren<Props>> = ({ map }) => {
    const { stage } = useMapContext();

    useEffect(() => {
        // Используем setTimeout для гарантии выполнения после текущего цикла событий
        map.setView([56, 20], 5);
    }, [stage]);

    return null;
};

export default TimeLineController;