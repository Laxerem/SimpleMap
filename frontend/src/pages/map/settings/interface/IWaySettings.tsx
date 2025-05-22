import { Icon, LatLngExpression } from "leaflet";

interface WayPoint {
    coordinates: LatLngExpression
}

interface Stage {
    name: string,
    description: string,
    point_index: number
}

interface WayMapData {
    points: WayPoint[]
    stages: Stage[]
}

interface IWaySettings {
    data: WayMapData
    custom_point_icon?: Icon
}

export type { WayPoint, Stage, WayMapData, IWaySettings }