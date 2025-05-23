import React from "react"
import { Marker, Polyline } from "react-leaflet"
import WayObject from "../../settings/WayObject"
import { WayStage } from "../../settings/interface/IWaySettings"

const WayMap: React.FC = () => {
    const polylines_coords = WayObject.data.get_points_coords()

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
            Object.keys(WayObject.data.way_stages).map((key, index) => (

                <Marker key={index} position={polylines_coords[WayObject.data.way_stages[key as unknown as number].point_index]} icon={WayObject.custom_point_icon || undefined}>

                </Marker>
            ))
            }
        </>
    )
}

export default WayMap