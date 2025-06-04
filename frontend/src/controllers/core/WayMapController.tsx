import React, { PropsWithChildren, useEffect } from "react"

import WayController from "../way_controller"
import AreaController from "../area_controller"

import { areaPolygons } from "../../data/area_polygons";
import WayCounter from "../../pages/map/way/WayCounter";
import { useWayContext } from "../../context/way/way_context";

interface WayMapControllerProps {
    way_object: WayCounter
}

const WayMapController: React.FC<PropsWithChildren<WayMapControllerProps>> = ({way_object}) => {
    const {distance, stageId, setStageId} = useWayContext()

    useEffect(() => {
        const stage = way_object.get_stage_by_distance(distance)
        if (stage) {
            if (Number(stage[0]) != stageId) {
                setStageId(Number(stage[0]))
            }
        }
    }, [distance])

    return (
        <>
            <WayController way={way_object.get_segments()}/>
            <AreaController polygons_area={areaPolygons}/>
        </>
    )
}

export default WayMapController