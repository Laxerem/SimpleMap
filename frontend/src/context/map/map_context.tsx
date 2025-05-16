import React, { useContext } from "react";

interface IMapContext {
    stage: number;
    zoomContext: number;
    setStage: (stage: number) => void;
    setZoomContext: (zoom: number) => void;
}

export const MapContext = React.createContext<IMapContext>({
    stage: 0,
    zoomContext: 5,
    setStage: () => {
        throw new Error("Not implemented")
    },
    setZoomContext: () => {
        throw new Error("Not implemented")
    }
})

export const useMapContext = () => useContext(MapContext)