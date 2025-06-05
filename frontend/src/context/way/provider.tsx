import React, { PropsWithChildren, useState } from "react";
import { WayContext } from "./way_context";
import { LatLngExpression } from "leaflet";

const WayContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [stageId, setStageId] = useState<number>(0)
    const [distance, setDistance] = useState<number>(0)
    const [coords, setCoords] = useState<LatLngExpression | null>(null)

    return(
        <WayContext.Provider
            value={{ stageId, coords, distance, setStageId, setCoords, setDistance}}
        >
        {children}
        </WayContext.Provider>
    )
}

export default WayContextProvider