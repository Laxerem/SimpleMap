import React, { PropsWithChildren, useState } from "react";
import { MapContext } from "../../../context/map/map_context";

const MapContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [stage, setStage] = useState<number>(0)
    const [zoomContext, setZoomContext] = useState<number>(5)

    return (
        <MapContext.Provider
        value={{stage, zoomContext, setStage, setZoomContext}}
        >
        {children}
        </MapContext.Provider>
    )
}

export default MapContextProvider