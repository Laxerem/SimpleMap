import WayCounter from "./WayCounter"
import { lines_geojson } from "../../../data/lines"
import { stages } from "../../../data/stages"

const WayObject = new WayCounter(lines_geojson.features.map(feature => feature.geometry), stages)

export default WayObject