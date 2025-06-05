import React, { PropsWithChildren } from "react"
import { useWayContext } from "../../context/way/way_context"
import { Polyline } from "react-leaflet"
import { WaySegment } from "./settings/interface/IWaySettings"
import { Icon } from "leaflet"
interface WayMapProps {
    way: WaySegment[]
    point_icon?: Icon
}

const WayMap: React.FC<PropsWithChildren<WayMapProps>> = ({way}) => {
    const { distance } = useWayContext()

    const filtered_segments = way.map(segment => {
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
                            weight: 2,       // Толщина (в пикселях)
                            opacity: 0.7,    // Прозрачность (0-1)
                            lineCap: 'round', // Скругление краёв
                        }}
                    />
                ))
            }
        </>
    )
}

export default WayMap