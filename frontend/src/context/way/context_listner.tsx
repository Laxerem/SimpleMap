import React, { useEffect } from "react";
import { useWayContext } from "./way_context";


const WayContextListner: React.FC = () => {
    const {stageId, distance} = useWayContext()

    useEffect(() => {
        console.log(`ID Стадии: ${stageId}`)
    }, [stageId])

    useEffect(() => {
        console.log(`Дистанция: ${distance}`)
    }, [distance])

    return null
}

export default WayContextListner