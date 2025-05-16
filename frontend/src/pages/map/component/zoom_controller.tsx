import { useMap } from "react-leaflet"
import { useMapContext } from "../../../context/map/map_context"
import { useEffect, useState } from "react"

const ZoomController = () => {
    const map = useMap()
    const [zoom, setZoom] = useState(map.getZoom())
    const {setZoomContext, stage} = useMapContext()

    useEffect(() => {
        setZoomContext(zoom)
        map.setZoom(stage)
    })

    return <></>
}

export default ZoomController