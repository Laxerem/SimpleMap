import React, { PropsWithChildren, useState } from "react";
import { MapContext } from "../../../context/map/map_context";

const MapContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [stage, setStage] = useState<number>(0)

    return (
        <MapContext.Provider
        value={{stage, setStage}}
        >
        {children}
        </MapContext.Provider>
    )
}

export default MapContextProvider