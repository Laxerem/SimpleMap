import L, { LatLngExpression } from "leaflet"
import { WayStage, WayPoint, Stage } from "../../settings/interface/IWaySettings"

function convert_distance(distance: number) {
    return Math.trunc(distance / 1000)
}

interface WaySegment {
    way_points: {
        [key:number]: WayPoint
    }
    total_distance: number
}

class WayCounter {
    private way_stages: WayStage[] 
    private way_segments: WaySegment[]
    private distance: number
    private way_points: {[key:number]: WayPoint}

    constructor(lines_geojson: GeoJSON.LineString[], stages: Stage[]) {
        this.way_stages = []
        this.way_segments = []
        this.distance = 0
        this.way_points = {}

        let point_index = 0

        lines_geojson.forEach(line => {
            let line_points: WayPoint[] = []
            let segment_distance = 0

            const line_coordinates = line.coordinates.map(point => L.latLng(point[1], point[0]))

            line_coordinates.forEach((point, i) => {
                const new_point: WayPoint = {
                    coordinates: point,
                    distance: this.distance
                }

                line_points.push(new_point)
                this.way_points[point_index] = new_point
                
                if (i < line.coordinates.length - 1) {
                    let seg_distance = convert_distance(point.distanceTo(line_coordinates[i + 1]))
                    segment_distance += seg_distance
                }

                point_index += 1
                this.distance += segment_distance
            })
            this.way_segments.push({
                way_points: line_points,
                total_distance: segment_distance
            })
        })

        stages.forEach(stage => {
            const point = this.way_points[stage.point_index]

            this.way_stages.push({
                name: stage.name,
                distance: point.distance,
                point_index: stage.point_index
            })
        })

        console.log(this)
    }

    public get_stage_by_distance(distance: number) {
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

    public get_segments() {
        return this.way_segments
    }

    public get_point(index: number): WayPoint | undefined {
        return this.way_points[index]
    }
}

export default WayCounter