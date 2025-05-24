import { Icon, LatLngExpression } from "leaflet";
import WayCounter from "../../WayCounter";

interface Stage {
    name: string,
    point_index: number
}

interface WayPoint {
    coordinates: LatLngExpression,
    distance: number
}

interface WayStage {
    name: string,
    distance: number,
    point_index: number
}

interface IWaySettings {
    data: WayCounter,
    custom_point_icon?: Icon
}

export type { Stage, WayPoint, WayStage, IWaySettings }