import React, { PropsWithChildren } from "react"
import { useMap } from "react-leaflet";

import ViewController from "../view_controller";
import ZoomController from "../zoom_controller"
import { areaPolygons } from "../../data/area_polygons";
import AreaController from "../area_controller";
import StageController from "../stage_controller";

import WayCounter from "../../pages/map/way/WayCounter";

interface MapControllerProps {
    way_object: WayCounter
}

const MapController: React.FC<PropsWithChildren<MapControllerProps>> = ({way_object}) => {
    const map = useMap()
    
    return (
        <>
        <ViewController map={map}/>
        <ZoomController map={map}/>
        <AreaController polygons_area={areaPolygons}/>
        <StageController way_object={way_object}/>
        </>
    )
}

export default MapController