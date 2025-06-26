import React, { PropsWithChildren, useState } from "react";
import { HTMLMotionProps, MotionStyle, motion } from "framer-motion";
interface ShipImageProps {
    imageUrl: string
    motionOptions?: HTMLMotionProps<"div">
    hoverStyle?: MotionStyle
    style?: MotionStyle
    handleClick?: () => void
    name?: string
}

const ShipImage: React.FC<PropsWithChildren<ShipImageProps>> = ({imageUrl, name, motionOptions, style, hoverStyle, handleClick}) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <motion.div
        {...motionOptions}
        className="ship_image"
        style={isHover ? {
            backgroundImage: `url(${imageUrl})`,
            ...hoverStyle
        } : { 
            backgroundImage: `url(${imageUrl})`,
            ...style
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseDown={handleClick}
        >
        <h3>{name}</h3>
        </motion.div>
    )
}

export default ShipImage