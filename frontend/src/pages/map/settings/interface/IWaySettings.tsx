interface Stage {
    name: string,
    point_index: number
}

interface WayPoint {
    coordinates: L.LatLng,
    distance: number
}

interface WayStage {
    name: string,
    distance: number,
    point_index: number
}

export type { Stage, WayPoint, WayStage }