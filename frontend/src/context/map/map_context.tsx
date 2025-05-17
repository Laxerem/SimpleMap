import React, { useContext } from "react";
import { LatLngExpression } from "leaflet";

interface IMapContext {
    stage: number;
    zoomContext: number;
    zoomCenterContext: LatLngExpression;
    setStage: (stage: number) => void;
    setZoomContext: (zoom: number) => void;
    setZoomCenterContext: (center: LatLngExpression) => void
}

export const MapContext = React.createContext<IMapContext>({
    stage: 0,
    zoomContext: 0,
    zoomCenterContext: [0, 0],
    setStage: () => {
        throw new Error("Not implemented")
    },
    setZoomContext: () => {
        throw new Error("Not implemented")
    },
    setZoomCenterContext: () => {
        throw new Error("Not implemented")
    }
})

export const useMapContext = () => useContext(MapContext)