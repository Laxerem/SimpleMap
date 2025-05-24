import React, { useEffect } from "react";
import { useMapContext } from "./map_context";


const MapContextListner: React.FC = () => {
    const {zoomContext, viewContext } = useMapContext()

    useEffect(() => {
        console.log(`Зум: ${zoomContext}`)
    }, [zoomContext])

    useEffect(() => {
        console.log(`Позиция: ${viewContext}`)
    }, [viewContext])

    return null
}

export default MapContextListner