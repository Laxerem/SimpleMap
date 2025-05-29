import L, { Icon } from "leaflet";

const CustomPointIcon: Icon = new L.Icon({
    iconUrl: "/animated_dot.svg",
    iconSize: [60, 60]
})

export { CustomPointIcon }
