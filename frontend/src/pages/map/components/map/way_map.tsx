import React from "react"
import { Marker, Polyline } from "react-leaflet"
import WaySettings from "../../settings/WaySettings"

const WayMap: React.FC = () => {
    const polylines_coords = WaySettings.data.points.map(point => point.coordinates)

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
            WaySettings.data.stages.map((stage, index) => (
                <Marker key={index} position={polylines_coords[stage.point_index]} icon={WaySettings.custom_point_icon || undefined}>

                </Marker>
            ))
            }
        </>
    )
}

export default WayMap