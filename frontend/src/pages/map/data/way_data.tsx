import { Stage, WayMapData, WayPoint } from "../settings/interface/IWaySettings"

const way_points: WayPoint[] = [
    {coordinates: [57, 21]},
    {coordinates: [37, -8]},
    {coordinates: [-5, -35]},
    {coordinates: [-69, 0]},
    {coordinates: [9, 77]}
]

const stages: Stage[] = [
    {
        name: "Этап 1",
        description: "Начало",
        point_index: 0
    },
    {
        name: "Этап 2",
        description: "Продолжение",
        point_index: 2
    },
    {
        name: "Этап 3",
        description: "Финал",
        point_index: 4
    }
]

export const way_data: WayMapData = {
    points: way_points,
    stages: stages
}