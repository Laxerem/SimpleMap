import { MapContainerProps } from "react-leaflet";
import { IMapSettings } from "./interface/IMapSettings";

const MapProps: MapContainerProps = {
    maxZoom: 8,
    minZoom: 2,
    maxBounds: [[-90, -95], // Мин. широта, долгота острова Петра I
    [90, -95 + 360]], // Макс. широта, долгота копии],
    maxBoundsViscosity: 1
}

const MapSettings: IMapSettings = {
    listen_events: true,
    way_display: true,
    props: MapProps
}

export default MapSettings