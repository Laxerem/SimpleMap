import React, { useContext } from "react";

interface IMapContext {
    stage: number;
    setStage: (stage: number) => void;
}

export const MapContext = React.createContext<IMapContext>({
    stage: 0,
    setStage: () => {
        throw new Error("Not implemented")
    }
})

export const useMapContext = () => useContext(MapContext)