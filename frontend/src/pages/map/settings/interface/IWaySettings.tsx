import { LatLngExpression, PolylineOptions } from "leaflet"
import React, { CSSProperties, ReactNode } from "react"
import { MissionStats } from "../../overlay/MissionStats"

interface Stage {
    name: string,
    date: string,
    point_index: number
    stage_info?: StageData
    box_style?: CSSProperties
}

interface Stages {
    [key:number]: Stage
}

interface StageData {
    stage_component: React.FC | ReactNode,
    status: MissionStats
}

interface StagesData {
    [key:number]: StageData
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
        style?: PolylineOptions
    }
}

interface WayPoint {
    coordinates: L.LatLng,
    distance: number
}

interface WayPoints {
    [point_id:number]: {
        coordinates: L.LatLng,
        distance: number
    }
}
interface WayStage {
    stage: Stage,
    distance: number
}
interface WayStages {
    [stage_id:number]: WayStage
}

interface WaySegment {
    way_points: WayPoints
    total_distance: number
}

export type { Stage, Stages, StageData, StagesData, StageArea, Area, AreaData, WayPoint, WayStage, WayPoints, WayStages, WaySegment }