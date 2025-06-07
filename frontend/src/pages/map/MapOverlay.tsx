import React from "react";
import ShipSettings from "./overlay/ShipSettings";
import StageComponent from "./overlay/StageComponent";
import WayMap from "./overlay/WayMap";
import WayObject from "./way/way_object";

const MapOverlay: React.FC = () => {

    return(
        <div className="map_overlay">
            <StageComponent />
            <ShipSettings />
            <WayMap way={WayObject.get_segments()}/>
        </div>
    )
}

export default MapOverlay