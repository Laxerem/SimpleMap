import React, { PropsWithChildren } from "react"
import { useWayContext } from "../../context/way/way_context"
import { Polyline } from "react-leaflet"
import { WaySegment } from "./settings/interface/IWaySettings"
import { Icon } from "leaflet"
import Ship from "../../components/Ship"
import { WayShipIcon } from "../../data/icons"
interface WayMapProps {
    way: WaySegment[]
    point_icon?: Icon
}

const WayMap: React.FC<PropsWithChildren<WayMapProps>> = ({way}) => {
    const { distance, setCoords, coords } = useWayContext()

    const filtered_segments = way.map(segment => {
        const filtered_points = Object.entries(segment.way_points)
            .filter(([, point]) => point.distance <= distance)
            .map(([, point]) => point.coordinates)
        return filtered_points.length > 1 ? filtered_points : [];
    }).filter(segment => segment.length > 0);

    const current_segment = filtered_segments[filtered_segments.length - 1]

    try {
        const current_coords = Object.values(current_segment)[current_segment.length - 1]
        setCoords(current_coords)
    }
    catch(Error) {
        setCoords(null)
    } //Заговнокодил

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
            <Ship coords={coords} icon={WayShipIcon} name="Кораблик"/>
        </>
    )
}

export default WayMap