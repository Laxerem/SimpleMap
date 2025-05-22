import { useMapContext } from "../../../context/map/map_context";
import React, { PropsWithChildren, useEffect } from "react";
import { Map } from "leaflet";

type Props = {
    map: Map
}

const ZoomController: React.FC<PropsWithChildren<Props>> = ({map}) => {
    const setZoomContext = useMapContext().setZoomContext;

    useEffect(() => {

        const handleZoom = () => {
            setZoomContext(map.getZoom())
        }
        
        map.on("zoomend", handleZoom)
        
        return () => {
            map.off("zoomend", handleZoom)
        };
    }, []);

    return null;
};

export default ZoomController;