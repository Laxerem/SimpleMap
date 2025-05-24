import React, { useContext } from "react";
import { LatLngExpression } from "leaflet";
import { WayStage } from "../../pages/map/settings/interface/IWaySettings";

interface IMapContext {
    stage: WayStage;
    zoomContext: number;
    viewContext: LatLngExpression;
    setStage: (stage: WayStage) => void;
    setZoomContext: (zoom: number) => void;
    setViewContext: (center: LatLngExpression) => void
}

export const MapContext = React.createContext<IMapContext>({
    stage: {
        name:"",
        distance: 0,
        point_index: NaN
    },
    zoomContext: 0,
    viewContext: [0, 0],
    setStage: () => {
        throw new Error("Not implemented")
    },
    setZoomContext: () => {
        throw new Error("Not implemented")
    },
    setViewContext: () => {
        throw new Error("Not implemented")
    }
})

export const useMapContext = () => useContext(MapContext)