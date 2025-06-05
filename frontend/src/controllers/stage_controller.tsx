import React, { PropsWithChildren, useEffect } from "react"
import { useWayContext } from "../context/way/way_context"
import WayCounter from "../pages/map/way/WayCounter"

interface StageControllerProps {
    way_object: WayCounter
}

const StageController: React.FC<PropsWithChildren<StageControllerProps>> = ({way_object}) => {
    const {distance, stageId, setStageId} = useWayContext()

    useEffect(() => {
        const stage = way_object.get_stage_by_distance(distance)
        if (stage) {
            if (Number(stage[0]) != stageId) {
                setStageId(Number(stage[0]))
            }
        }
    }, [distance])

    return null
}

export default StageController