import L, { LatLngExpression } from "leaflet"
import { Stage } from "../settings/interface/IWaySettings"
import WayCounter from "../WayCounter"

const way_points: LatLngExpression[] = [
    [57, 21],
    [37, -8],
    [-5, -35],
    [-69, 0],
    [9, 77]
]

const stages: Stage[] = [
    {
        name: "Начало",
        point_index: 0
    },
    {
        name: "Продолжение",
        point_index: 2
    },
    {
        name: "Финал",
        point_index: 4
    }
]

const points = way_points.map(point => L.latLng(point))
const WayData = new WayCounter(points, stages)

export default WayData