import React, { PropsWithChildren, useState } from "react";
import { WayContext } from "./way_context";
import { WayStage } from "../../pages/map/settings/interface/IWaySettings";

const WayContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [value, setValue] = useState<number>(0)
    const [stage, setStage] = useState<WayStage>({name: "Начало", distance: 0, point_index: 0})
    const [distance, setDistance] = useState<number>(0)

    return(
        <WayContext.Provider
            value={{value, stage, distance, setValue, setStage, setDistance}}
        >
        {children}
        </WayContext.Provider>
    )
}

export default WayContextProvider