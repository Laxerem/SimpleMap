import { MapContainerProps } from "react-leaflet";
import { IMapSettings } from "./interface/IMapSettings";
import WaySettings from "./WaySettings";

const MapProps: MapContainerProps = {
    maxZoom: 10,
    minZoom: 1,
    maxBounds: [[-90, -180], [90, 180]],
    maxBoundsViscosity: 0.5
}

const MapSettings: IMapSettings = {
    listen_events: true,
    props: MapProps,
    way_data: WaySettings.data
}

export default MapSettings