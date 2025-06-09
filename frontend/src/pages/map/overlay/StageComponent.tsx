import React, { ReactNode, useEffect, useState } from "react"
import { Stage, StageData } from "../settings/interface/IWaySettings"

import '../styles/stage.scss'
import { useWayContext } from "../../../context/way/way_context"
import way_object from "../way/way_object"
import StageInfo from "./StageInfo"
import { stages_info } from "../../../data/stages_info"
import { useMap } from "react-leaflet"

const StageComponent: React.FC = () => {
    const map = useMap()
    const {stageId, stageInfoWindow, setStageInfoWindow} = useWayContext()
    const [stage, setStage] = useState<Stage>(way_object.get_stage(stageId).stage)
    const [content, setContent] = useState<StageData>(stages_info[stageId])
    const [width, setWidth] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false)
    

    const handleClick = () => {
        setStageInfoWindow(!stageInfoWindow)
        setWidth(stageInfoWindow ? null : 23)
    };

    useEffect(() => {
        const new_stage = way_object.get_stage(stageId).stage
        setStage(new_stage)
        setContent(stages_info[stageId])
    }, [stageId])

    useEffect(() => {
        setWidth(stageInfoWindow ? 23: null)
    }, [stageInfoWindow])

    useEffect(() => {
        if (isHovered) {
            map.dragging.disable()
            map.scrollWheelZoom.disable();
        }
        else {
            map.dragging.enable();
            map.scrollWheelZoom.enable();
        }
    }, [isHovered])

    return(
        <div className="stage_container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
            { stageInfoWindow && content ? <StageInfo children={content.stage_component as unknown as ReactNode}/> : null }
        </div>
    )
}

export default StageComponent