import React, { useEffect, useState } from "react";
import { useWayContext } from "../../../context/way/way_context";
import { useMapContext } from "../../../context/map/map_context";
import '../styles/ship.scss'

const ShipSettings: React.FC = () => {
    const {coords} = useWayContext()
    const {setViewContext} = useMapContext()
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    useEffect(() => {
        if (isClicked && coords) {
            setViewContext(coords)
        }
    }, [isClicked, coords])

    return (
        <div className="ship_settings_container" 
        onClick={handleClick}
        style={
            isClicked ? {
                transform: "scaleX(-1)",
                borderRadius: "0px 0px 20px 0px",
                backgroundImage: "url(/compass.png)",
                backgroundColor: "rgba(255,255,255, 0.8)"
            } : {}
        }>

        </div>
    )
}

export default ShipSettings