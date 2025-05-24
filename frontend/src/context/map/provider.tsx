import React, { PropsWithChildren, useState } from "react";
import { MapContext } from "./map_context";
import { LatLngExpression } from "leaflet";

const MapContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [zoomContext, setZoomContext] = useState<number>(5)
    const [zoomCenterContext, setZoomCenterContext] = useState<LatLngExpression>([56,20])

    return (
        <MapContext.Provider
        value={{zoomContext, viewContext: zoomCenterContext, setZoomContext, setViewContext: setZoomCenterContext}}
        >
        {children}
        </MapContext.Provider>
    )
}

export default MapContextProvider