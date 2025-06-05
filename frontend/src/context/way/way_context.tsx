import { LatLngExpression } from "leaflet";
import React, { useContext } from "react";

interface IWayContext {
    stageId: number;
    coords: LatLngExpression | null;
    distance: number;
    setStageId: (stage: number) => void;
    setCoords: (coords: LatLngExpression | null) => void;
    setDistance: (distance: number) => void;
}

export const WayContext = React.createContext<IWayContext>({
    stageId: 0,
    distance: 0,
    coords: [0,0],
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