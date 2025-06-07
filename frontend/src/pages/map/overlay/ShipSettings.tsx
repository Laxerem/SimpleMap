import React, { useState } from "react";
import { useWayContext } from "../../../context/way/way_context";
import { useMapContext } from "../../../context/map/map_context";
import '../styles/ship.scss'

const ShipSettings: React.FC = () => {
    const {coords, setCoords} = useWayContext()
    const {viewContext, setViewContext} = useMapContext()
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [width, setWidth] = useState<number | null>(null);

    const handleClick = () => {
        setIsClicked(!isClicked)
        setWidth(isClicked ? null : 20)
    }

    return (
        <div className="ship_settings_container" 
        onClick={handleClick}
        style={
            width !== null
                ? { width: `${width}vw` }
                : {}
        }>

        </div>
    )
}

export default ShipSettings