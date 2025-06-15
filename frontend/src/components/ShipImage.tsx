import React, { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
interface ShipImageProps {
    imageUrl: string
    motionOptions?: HTMLMotionProps<"div">
}

const ShipImage: React.FC<PropsWithChildren<ShipImageProps>> = ({imageUrl, motionOptions}) => {

    return (
        <motion.div
        {...motionOptions}
        className="ship_image"
        style={{ 
            backgroundImage: `url(${imageUrl})`,
        }}
        />
    )
}

export default ShipImage