import React, { useContext } from "react";
import { WayStage } from "../../pages/map/settings/interface/IWaySettings";

interface IWayContext {
    value: number;
    stage: WayStage;
    distance: number;
    setValue: (value: number) => void;
    setStage: (stage: WayStage) => void;
    setDistance: (distance: number) => void;
}

export const WayContext = React.createContext<IWayContext>({
    value: 0,
    stage: {
        name: "",
        distance: 0,
        point_index: NaN,
    },
    distance: 0,
    setValue: () => {
        throw new Error("Not implemented")
    },
    setStage: () => {
        throw new Error("Not implemented")
    },
    setDistance: () => {
        throw new Error("Not implemented")
    }
})

export const useWayContext = () => useContext(WayContext)