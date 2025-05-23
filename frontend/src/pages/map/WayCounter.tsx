import L, { LatLngExpression } from "leaflet"
import { WayStages, WayPoints, Stage, WayPoint } from "./settings/interface/IWaySettings"

function convert_distance(distance: number) {
    return Math.trunc(distance / 1000)
}

class WayCounter {
    way_points: WayPoints
    way_stages: WayStages
    segments_distance: number[]
    distance: number

    constructor(points: L.LatLng[], stages: Stage[]) {

        this.way_points = {}
        this.way_stages = {}
        this.segments_distance = []

        let total_distance = 0

        points.forEach((point, i) => {
            this.way_points[i] = {
                coordinates: point,
                distance: total_distance
            }

            if (i < points.length - 1) {
                let seg_distance = convert_distance(point.distanceTo(points[i + 1]))

                total_distance += seg_distance
                this.segments_distance.push(seg_distance)
            }
        })

        stages.forEach((stage, i) => {
            this.way_stages[i] = {
                name: stage.name,
                distance: this.way_points[i].distance,
                point_index: stage.point_index
            }
        })

        this.distance = total_distance
        console.log(this)
    }

    public get_points_coords() {
        const points_coords: LatLngExpression[] = []
        Object.keys(this.way_points).forEach((key) => {
            const index = Number(key)
            const point: WayPoint = this.way_points[index]

            points_coords.push(point.coordinates)
        })

        return points_coords
    }
}

export default WayCounter