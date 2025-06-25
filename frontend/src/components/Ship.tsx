import L, { Icon, LatLngExpression } from "leaflet"
import React, { PropsWithChildren } from "react"
import { Marker, Tooltip } from "react-leaflet"
import { useMapContext } from "../context/map/map_context"

interface ShipProps {
    coords: LatLngExpression | null,
    icon?: Icon
    name?: string
}

const Ship: React.FC<PropsWithChildren<ShipProps>> = ({coords, icon, name}) => {
    const {setViewContext} = useMapContext()

    const handleClick = () => {
        setViewContext(coords as LatLngExpression)
    }

    const defaultIcon = L.icon({
        iconUrl: "/animated_dot.svg",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
    });

    const ship_icon = icon || defaultIcon

    return(
        <>
            { coords ?
                <Marker position={coords}
                    icon={ship_icon}
                    eventHandlers={{click: () => handleClick()}}>
                    { name ?
                        <Tooltip direction="top">{name}</Tooltip>
                    : null}
                </Marker>
                : null
            }
        </>
    )
}

export default Ship