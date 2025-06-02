import { Map } from "leaflet"
import React, { PropsWithChildren, useEffect } from "react"
import { useMapContext } from "../context/map/map_context"

interface ViewControllerProps {
    map: Map
}

const ViewController: React.FC<PropsWithChildren<ViewControllerProps>> = ({map}) => {

    const {viewContext, zoomContext} = useMapContext()

    useEffect(() => {
        map.flyTo(viewContext, 6, {animate: true, duration: 1, easeLinearity: 0.5})
    }, [viewContext])

    useEffect(() => {
        map.setZoom(zoomContext)
    }, [zoomContext])

    return null
}

export default ViewController