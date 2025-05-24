import React, { useContext } from "react";
import { LatLngExpression } from "leaflet";

interface IMapContext {
    zoomContext: number;
    viewContext: LatLngExpression;
    setZoomContext: (zoom: number) => void;
    setViewContext: (center: LatLngExpression) => void
}

export const MapContext = React.createContext<IMapContext>({
    zoomContext: 0,
    viewContext: [0, 0],
    setZoomContext: () => {
        throw new Error("Not implemented")
    },
    setViewContext: () => {
        throw new Error("Not implemented")
    }
})

export const useMapContext = () => useContext(MapContext)