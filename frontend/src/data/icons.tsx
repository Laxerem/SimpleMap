import L, { Icon } from "leaflet";

const StagePointIcon: Icon = new L.Icon({
    iconUrl: "/animated_dot.svg",
    iconSize: [60, 60]
})

const WayShipIcon: Icon = new L.Icon({
    iconUrl: "/BellinsgauzenShip.png",
    iconSize: [50,50]
})

export { StagePointIcon, WayShipIcon }
