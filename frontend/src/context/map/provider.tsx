import React, { PropsWithChildren, useState } from "react";
import { MapContext } from "./map_context";
import { LatLngExpression } from "leaflet";

const MapContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [zoomContext, setZoomContext] = useState<number>(5)
    const [zoomCenterContext, setZoomCenterContext] = useState<LatLngExpression>([60.01073195511674, 29.7266218930547])

    return (
        <MapContext.Provider
        value={{zoomContext, viewContext: zoomCenterContext, setZoomContext, setViewContext: setZoomCenterContext}}
        >
        {children}
        </MapContext.Provider>
    )
}

export default MapContextProvider