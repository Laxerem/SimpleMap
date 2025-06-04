import React, { PropsWithChildren, useEffect } from "react"
import { useWayContext } from "../context/way/way_context"
import { WaySegment } from "../pages/map/settings/interface/IWaySettings"
import { Polyline, useMap } from "react-leaflet"
import { Icon } from "leaflet"

interface WayControllerProps {
    way: WaySegment[]
    point_icon?: Icon
}

const WayController: React.FC<PropsWithChildren<WayControllerProps>> = ({way}) => {
    const map = useMap();
    const {distance} = useWayContext()

    useEffect(() => {
    
        map.on("zoom", () => {});
    
        return () => {
          map.off("zoom", () => {});
        };
      }, [map]);

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

export default WayController
