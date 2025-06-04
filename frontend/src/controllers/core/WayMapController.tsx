import React, { PropsWithChildren } from "react"

import WayController from "../way_controller"
import AreaController from "../area_controller"

import { areaPolygons } from "../../data/area_polygons";
import WayCounter from "../../pages/map/way/WayCounter";

interface WayMapControllerProps {
    way_object: WayCounter
}

const WayMapController: React.FC<PropsWithChildren<WayMapControllerProps>> = ({way_object}) => {

    return (
        <>
            <WayController way={way_object.get_segments()}/>
            <AreaController polygons_area={areaPolygons}/>
        </>
    )
}

export default WayMapController