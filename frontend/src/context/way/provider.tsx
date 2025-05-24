import React, { PropsWithChildren, useState } from "react";
import { WayContext } from "./way_context";
import { WayStage } from "../../pages/map/settings/interface/IWaySettings";

const WayContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [stage, setStage] = useState<WayStage>({name: "", distance: 0, point_index: NaN})
    const [distance, setDistance] = useState<number>(0)

    return(
        <WayContext.Provider
            value={{stage, distance, setStage, setDistance}}
        >
        {children}
        </WayContext.Provider>
    )
}

export default WayContextProvider