import { LatLngExpression } from "leaflet"

interface Stage {
    name: string,
    date: string,
    point_index: number
}

interface AreaData {
    view_coords: LatLngExpression,
    geo_json: GeoJSON.Polygon
}

interface Area {
    [key:number]: AreaData
}

interface StageArea {
    [key:string]: {
        dynamic_area: Area,
        point_index: number
    }
}

interface WayPoint {
    coordinates: L.LatLng,
    distance: number
}

interface WayStage {
    name: string,
    date: string,
    distance: number,
    point_index: number
}

export type { Stage, StageArea, Area, AreaData, WayPoint, WayStage }