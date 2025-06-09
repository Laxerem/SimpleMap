import { LatLngExpression } from "leaflet";
import React, { useContext } from "react";

interface IWayContext {
    stageInfoWindow: boolean
    stageId: number;
    coords: LatLngExpression | null;
    distance: number;
    setStageInfoWindow: (stageInfoWindow: boolean) => void;
    setStageId: (stage: number) => void;
    setCoords: (coords: LatLngExpression | null) => void;
    setDistance: (distance: number) => void;
}

export const WayContext = React.createContext<IWayContext>({
    stageInfoWindow: false,
    stageId: 0,
    distance: 0,
    coords: [0,0],
    setStageInfoWindow: () => {
        throw new Error("setStageInfo not implemented");
    },
    setStageId: () => {
        throw new Error("Not implemented")
    },
    setCoords: () => {
        throw new Error("Not implemented")
    },
    setDistance: () => {
        throw new Error("Not implemented")
    }
})

export const useWayContext = () => useContext(WayContext)