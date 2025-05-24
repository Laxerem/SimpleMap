import React, { useEffect } from "react";
import { useMapContext } from "./map_context";


const MapContextListner: React.FC = () => {
    const {zoomContext, viewContext, stage} = useMapContext()

    useEffect(() => {
        console.log(`Зум: ${zoomContext}`)
    }, [zoomContext])

    useEffect(() => {
        console.log(`Позиция: ${viewContext}`)
    }, [viewContext])

    useEffect(() => {
        console.log(`Стадия: ${stage.name}`)
    }, [stage])

    return null
}

export default MapContextListner