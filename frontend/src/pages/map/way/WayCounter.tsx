import L from "leaflet"
import { WayStages, WayPoints, WayPoint, Stages, WaySegment } from "../settings/interface/IWaySettings"

function convert_distance(distance: number) {
    return Math.trunc(distance / 1000)
}

class WayCounter {
    private way_stages: WayStages
    private way_segments: WaySegment[]
    private distance: number
    private way_points: WayPoints

    constructor(lines_geojson: GeoJSON.LineString[], stages: Stages) {
        this.way_stages = {}
        this.way_segments = []
        this.distance = 0
        this.way_points = {}

        let point_index = 0

        lines_geojson.forEach(segment => {
            let segment_points: WayPoint[] = []
            let segment_distance = 0

            const segment_coordinates = segment.coordinates.map(coords => L.latLng(coords[1], coords[0]))

            segment_coordinates.forEach((point_coords, index) => {
                const new_point: WayPoint = {
                    coordinates: point_coords,
                    distance: this.distance
                }

                segment_points.push(new_point)
                this.way_points[point_index] = new_point

                if (index < segment.coordinates.length - 1) {
                    let seg_distance = convert_distance(point_coords.distanceTo(segment_coordinates[index + 1]))
                    segment_distance += seg_distance
                    this.distance += seg_distance
                }

                point_index += 1
            })

            this.way_segments.push({
                way_points: segment_points,
                total_distance: segment_distance
            })
        })

        Object.entries(stages).forEach(([stage_id, stage]) => {
            const point = this.way_points[stage.point_index]

            this.way_stages[Number(stage_id)] = {
                stage: stage,
                distance: point.distance
            }
        })

        console.log(this)
    }

    public get_stage_by_distance(distance: number) {
        return Object.entries(this.way_stages).find(([, stage]: [string, { stage: Stages; distance: number }]) => distance <= stage.distance);
    }

    public get_stage(stage_id: number) {
        return this.way_stages[stage_id]
    }

    public get_all_stages() {
        return Object.keys(this.way_stages).map(key => this.way_stages[Number(key)])
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