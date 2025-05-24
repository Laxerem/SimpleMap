import React, { useContext } from "react";
import { WayStage } from "../../pages/map/settings/interface/IWaySettings";

interface IWayContext {
    stage: WayStage;
    distance: number;
    setStage: (stage: WayStage) => void;
    setDistance: (distance: number) => void;
}

export const WayContext = React.createContext<IWayContext>({
    stage: {
        name: "",
        distance: 0,
        point_index: NaN,
    },
    distance: 0,
    setStage: () => {
        throw new Error("Not implemented")
    },
    setDistance: () => {
        throw new Error("Not implemented")
    }
})

export const useWayContext = () => useContext(WayContext)