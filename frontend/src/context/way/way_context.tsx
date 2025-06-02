import React, { useContext } from "react";

interface IWayContext {
    stageId: number;
    distance: number;
    setStageId: (stage: number) => void;
    setDistance: (distance: number) => void;
}

export const WayContext = React.createContext<IWayContext>({
    stageId: 0,
    distance: 0,
    setStageId: () => {
        throw new Error("Not implemented")
    },
    setDistance: () => {
        throw new Error("Not implemented")
    }
})

export const useWayContext = () => useContext(WayContext)