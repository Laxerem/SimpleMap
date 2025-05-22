import L, { Icon } from "leaflet";
import { IWaySettings } from "./interface/IWaySettings";
import { way_data } from "../data/way_data";

const wayPointIcon: Icon = new L.Icon({
    iconUrl: "/animated_dot.svg",
    iconSize: [60, 60]
})

const WaySettings: IWaySettings = {
    data: way_data,
    custom_point_icon: wayPointIcon
}

export default WaySettings