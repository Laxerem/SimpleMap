import React, { PropsWithChildren, useState } from "react";
import { WayContext } from "./way_context";

const WayContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [stageId, setStageId] = useState<number>(0)
    const [distance, setDistance] = useState<number>(0)

    return(
        <WayContext.Provider
            value={{ stageId: stageId, distance, setStageId, setDistance}}
        >
        {children}
        </WayContext.Provider>
    )
}

export default WayContextProvider