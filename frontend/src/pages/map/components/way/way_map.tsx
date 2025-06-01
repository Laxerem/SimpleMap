import React, { useEffect } from "react"
import { Marker, Polyline } from "react-leaflet"
import { useWayContext } from "../../../../context/way/way_context"
import { WayStage } from "../../settings/interface/IWaySettings"

import WayObject from "./way_object"
import { CustomPointIcon } from "./data/point_icon"
import { LatLngExpression } from "leaflet"

const WayMap: React.FC = () => {
    const way_stages = WayObject.get_stages()
    const way_segments = WayObject.get_segments()
    const {distance, stage, setStage, setDistance, setValue} = useWayContext()

    useEffect(() => {
        const new_stage = WayObject.get_stage_by_distance(distance)
        if (new_stage) {
            if (new_stage != stage) {
                setStage(new_stage)
            }
        }
    }, [distance, setDistance])

    const handle_click = (new_stage: WayStage) => {
        const new_value = 100 / (WayObject.total_distance() / new_stage.distance)

        setDistance(new_stage.distance)
        setStage(new_stage)
        setValue(new_value)
    }

    const filtered_segments = way_segments.map(segment => {
        const filtered_points = Object.entries(segment.way_points)
            .filter(([, point]) => point.distance <= distance)
            .map(([, point]) => point.coordinates)
        return filtered_points.length > 1 ? filtered_points : [];
    }).filter(segment => segment.length > 0);

    return (
        <>
            {
                filtered_segments.map((points, index) => (
                    <Polyline
                        key={index} 
                        positions={points}
                        weight={2}
                        pathOptions={{
                            color: 'yellowgreen', // Цвет линии
                            weight: 2.5,       // Толщина (в пикселях)
                            opacity: 0.7,    // Прозрачность (0-1)
                            lineCap: 'round', // Скругление краёв
                        }}
                    />
                ))
            }
            {
            way_stages.map((obj_stage, index) => (

                <Marker 
                key={index} position={WayObject.get_point(obj_stage.point_index)?.coordinates as LatLngExpression} 
                icon={CustomPointIcon}
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