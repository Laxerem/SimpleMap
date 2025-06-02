import React from "react"
import { useMap } from "react-leaflet";

import ViewController from "../view_controller";
import ZoomController from "../zoom_controller"
import WayMapController from "./way_map_controller";

import WayObject from "../../pages/map/way/way_object";

const MapController: React.FC = () => {
    const map = useMap()

    return (
        <>
        <ViewController map={map}/>
        <ZoomController map={map}/>
        <WayMapController way_object={WayObject}/>
        </>
    )
}

export default MapController