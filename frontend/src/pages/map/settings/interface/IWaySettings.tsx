import { LatLngExpression } from "leaflet"

interface Stage {
    name: string,
    date: string,
    point_index: number
}

interface Stages {
    [key:number]: Stage
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
        stage_id: number
    }
}

interface WayPoint {
    coordinates: L.LatLng,
    distance: number
}

interface WayStage {
    distance: number,
    stage: Stage
}

export type { Stages, StageArea, Area, AreaData, WayPoint, WayStage }