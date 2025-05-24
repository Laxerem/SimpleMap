import L from "leaflet"
import { WayStage, WayPoint, Stage } from "./settings/interface/IWaySettings"

function convert_distance(distance: number) {
    return Math.trunc(distance / 1000)
}

class WayCounter {
    private way_points: WayPoint[]
    private way_stages: WayStage[]

    private segments_distance: number[]
    private distance: number

    constructor(points: L.LatLng[], stages: Stage[]) {

        this.way_points = []
        this.way_stages = []
        this.segments_distance = []

        let total_distance = 0

        points.forEach((point, i) => {
            this.way_points.push({
                coordinates: point,
                distance: total_distance
            })

            if (i < points.length - 1) {
                let seg_distance = convert_distance(point.distanceTo(points[i + 1]))

                total_distance += seg_distance
                this.segments_distance.push(seg_distance)
            }
        })

        stages.forEach(stage => {
            this.way_stages.push({
                name: stage.name,
                distance: this.way_points[stage.point_index].distance,
                point_index: stage.point_index
            })
        })

        this.distance = total_distance
        console.log(this)
    }

    get_stage_by_distance(distance: number) {
        for (let i = 0; i < this.way_stages.length; i++) {
            if (distance <= this.way_stages[i].distance) {
                return this.way_stages[i]
            }
        }
    }

    public get_stages() {
        return this.way_stages
    }

    public total_distance() {
        return this.distance
    }

    public get_points_coords() {
        const points_coords = this.way_points.map(point => point.coordinates)

        return points_coords
    }
}

export default WayCounter