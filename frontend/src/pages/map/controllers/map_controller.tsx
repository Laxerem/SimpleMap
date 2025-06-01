import React, { useEffect } from "react"
import { useMap } from "react-leaflet";

import ZoomController from "./zoom_controller"
import AreaController from "./area_controller";

import { areaPolygons } from "../components/way/data/area_polygons";

import { useMapContext } from "../../../context/map/map_context";

const MapController: React.FC = () => {
    const map = useMap()
    const {viewContext, zoomContext} = useMapContext()

    useEffect(() => {
        map.flyTo(viewContext, 6, {animate: true, duration: 1, easeLinearity: 0.5})
    }, [viewContext])


    useEffect(() => {
        map.setZoom(zoomContext)
    }, [zoomContext])

    return (
        <>
        <ZoomController map={map}/>
        <AreaController polygons_area={areaPolygons} />
        </>
    )
}

export default MapController