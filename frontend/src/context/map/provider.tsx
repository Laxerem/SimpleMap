import React, { PropsWithChildren, useState } from "react";
import { MapContext } from "./map_context";
import { LatLngExpression } from "leaflet";

const MapContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [stage, setStage] = useState<number>(0)
    const [zoomContext, setZoomContext] = useState<number>(5)
    const [zoomCenterContext, setZoomCenterContext] = useState<LatLngExpression>([56,20])

    return (
        <MapContext.Provider
        value={{stage, zoomContext, viewContext: zoomCenterContext, setStage, setZoomContext, setViewContext: setZoomCenterContext}}
        >
        {children}
        </MapContext.Provider>
    )
}

export default MapContextProvider