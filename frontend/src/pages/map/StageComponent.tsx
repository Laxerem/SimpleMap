import React, { useEffect, useState } from "react"
import { Stage, StageData } from "./settings/interface/IWaySettings"

import './styles/stage.scss'
import { useWayContext } from "../../context/way/way_context"
import way_object from "./way/way_object"
import StageInfo from "../../components/StageInfo"
import { stages_info } from "../../data/stages_info"

const StageComponent: React.FC = () => {
    const {stageId} = useWayContext()
    const [stage, setStage] = useState<Stage>(way_object.get_stage(stageId).stage)
    const [info, setInfo] = useState<StageData>(stages_info[stageId])
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [width, setWidth] = useState<number | null>(null); // Только ширина как состояние

    const handleClick = () => {
        setIsClicked(!isClicked);
        setWidth(isClicked ? null : 23)
    };

    useEffect(() => {
        const new_stage = way_object.get_stage(stageId).stage
        setStage(new_stage)
        setInfo(stages_info[stageId])
    }, [stageId])

    useEffect(() => {

    }, [isClicked])

    return(
        <div>
            <div className="stage_display" 
            onClick={handleClick}
            style={
                width !== null
                ? { width: `${width}vw` }
                : {}
            }
            >
                {stage.name}
            </div>
            { isClicked && info ? <StageInfo data={info}/> : null }
        </div>
    )
}

export default StageComponent