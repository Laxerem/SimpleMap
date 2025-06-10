import React, { PropsWithChildren } from "react";

interface ShipImageProps {
    imageUrl: string
}

const ShipImage: React.FC<PropsWithChildren<ShipImageProps>> = ({imageUrl}) => {

    return (
        <div className="ship_image" style={{backgroundImage: `url(${imageUrl})`}}></div>
    )
}

export default ShipImage