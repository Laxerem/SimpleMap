import React, { useEffect } from "react"
import { useMap } from "react-leaflet";

import ZoomController from "./zoom_controller"
import TimeLineController from "./timeline_controller";

import { useMapContext } from "../../../../context/map/map_context";

const MapController: React.FC = () => {
    const map = useMap()
    const {viewContext, zoomContext} = useMapContext()

    useEffect(() => {
        map.setView(viewContext)
    }, [viewContext])

    useEffect(() => {
        map.setZoom(zoomContext)
    }, [zoomContext])

    return (
        <>
        <ZoomController map={map}/>
        <TimeLineController map={map}/>
        </>
    )
}

export default MapController