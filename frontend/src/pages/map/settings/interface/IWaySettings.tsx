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

interface WayStages {
    [key:number]: WayStage
}
interface WayPoints {
    [key:number]: WayPoint
}

interface IWaySettings {
    data: WayCounter,
    custom_point_icon?: Icon
}

export type { Stage, WayStages, WayPoints, WayPoint, WayStage, IWaySettings }