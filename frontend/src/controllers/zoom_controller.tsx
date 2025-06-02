import { useMapContext } from "../context/map/map_context";
import React, { PropsWithChildren, useEffect } from "react";
import { Map } from "leaflet";

type ZoomControllerProps = {
    map: Map
}

const ZoomController: React.FC<PropsWithChildren<ZoomControllerProps>> = ({map}) => {
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