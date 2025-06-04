import React, { useEffect, useState } from "react"
import { Stage } from "./settings/interface/IWaySettings"

import './styles/stage.scss'
import { useWayContext } from "../../context/way/way_context"
import way_object from "./way/way_object"

const StageComponent: React.FC = () => {
    const {stageId} = useWayContext()
    const [stage, setStage] = useState<Stage>(way_object.get_stage(stageId).stage)

    useEffect(() => {
        const new_stage = way_object.get_stage(stageId).stage
        setStage(new_stage)
    }, [stageId])

    return(
        <div className="stage_display">
            {stage.name}
        </div>
    )
}

export default StageComponent