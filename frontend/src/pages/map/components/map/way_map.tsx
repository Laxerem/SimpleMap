import React, { useEffect } from "react"
import { Marker, Polyline } from "react-leaflet"
import WayObject from "../../settings/WayObject"
import { useWayContext } from "../../../../context/way/way_context"
import { WayStage } from "../../settings/interface/IWaySettings"

const WayMap: React.FC = () => {
    const polylines_coords = WayObject.data.get_points_coords()
    const {distance, stage, setStage, setDistance, setValue} = useWayContext()

    useEffect(() => {
        const new_stage = WayObject.data.get_stage_by_distance(distance)
        if (new_stage) {
            if (new_stage != stage) {
                setStage(new_stage)
            }
        }
    }, [distance, setDistance])

    const handle_click = (new_stage: WayStage) => {
        const new_value = 100 / (WayObject.data.total_distance() / new_stage.distance)

        setStage(new_stage)
        setValue(new_value)
    }

    return (
        <>
            <Polyline 
            positions={polylines_coords}
            weight={2}
            pathOptions={{
                color: 'yellow', // Цвет линии
                weight: 2,       // Толщина (в пикселях)
                opacity: 0.7,    // Прозрачность (0-1)
                dashArray: '10, 5', // Пунктир (длина штриха, пробел)
                lineCap: 'round', // Скругление краёв
            }}
            />
            {
            WayObject.data.get_stages().map((obj_stage, index) => (

                <Marker 
                key={index} position={polylines_coords[obj_stage.point_index]} 
                icon={WayObject.custom_point_icon || undefined}
                eventHandlers={{
                    click: () => handle_click(obj_stage)
                }}
                >
                </Marker>
            ))
            }
        </>
    )
}

export default WayMap