import { Map } from "leaflet"
import React, { PropsWithChildren, useEffect } from "react"
import { useMapContext } from "../context/map/map_context"

interface ViewControllerProps {
    map: Map
}

const ViewController: React.FC<PropsWithChildren<ViewControllerProps>> = ({map}) => {

    const {viewContext, zoomContext} = useMapContext()

    useEffect(() => {
        setTimeout(() => {
            map.flyTo(viewContext, 8, {animate: true, duration: 2, easeLinearity: 1})
        }, 50)
    }, [viewContext])

    useEffect(() => {
        map.setZoom(zoomContext)
    }, [zoomContext])

    return null
}

export default ViewController