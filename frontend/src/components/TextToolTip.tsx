import React, { PropsWithChildren, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";

interface TextToolTipProps {
  children: string;
  content: string;
  image?: string;
}

export const TextToolTip: React.FC<PropsWithChildren<TextToolTipProps>> = ({children,content,image}) => {
    const [id, setId] = useState<number>(0)
    const [isHovered, setIsHovered] = useState<boolean>(false)

    useEffect(() => {
        if (isHovered) {
            setId(id + 1)
        }
    }, [isHovered])

    return (
        <Tippy
        arrow={true}
        content={
            <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.9}}
            animate={{ opacity: 1, scale: 1}}
            exit={{ opacity: 0, scale: 0.95}}
            transition={{
                type: "spring",
                stiffness: 560,
                damping: 20,
                duration: 5,
            }}
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url('/blue_gradient.png') center/cover no-repeat`,
                backgroundSize: "cover",
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "1vw",
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "300px",
                animation: "gradientMove 20s ease-in-out infinite"
            }}
            >
                {image ? 
                <img style={{marginBottom: "10px"}} 
                src={image} width="100%" height="100%"></img> 
                : null}

                {content}
            </motion.div>
        }
        >
        <span className="tooltip" style={{ cursor: "help" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </span>
        </Tippy>
    );
};
