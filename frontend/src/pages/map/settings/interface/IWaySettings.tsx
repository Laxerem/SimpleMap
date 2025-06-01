interface Stage {
    name: string,
    date: string,
    point_index: number
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

export type { Stage, WayPoint, WayStage }