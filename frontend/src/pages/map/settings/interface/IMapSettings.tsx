import { MapContainerProps } from "react-leaflet"

interface IMapSettings {
    listen_events: boolean,
    way_display: boolean,
    props: MapContainerProps
}

export type { IMapSettings }