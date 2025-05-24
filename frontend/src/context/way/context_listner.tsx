import React, { useEffect } from "react";
import { useWayContext } from "./way_context";


const WayContextListner: React.FC = () => {
    const {stage, distance} = useWayContext()

    useEffect(() => {
        console.log(`Стадия: ${stage.name}`)
    }, [stage])

    useEffect(() => {
        console.log(`Дистанция: ${distance}`)
    }, [distance])

    return null
}

export default WayContextListner