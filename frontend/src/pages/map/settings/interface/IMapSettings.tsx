import { MapContainerProps } from "react-leaflet"
import { WayMapData } from "./IWaySettings"

interface IMapSettings {
    listen_events: boolean,
    props: MapContainerProps,
    way_data?: WayMapData
}

export type { IMapSettings }