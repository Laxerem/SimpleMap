import React, { CSSProperties, PropsWithChildren, ReactNode, useEffect, useState } from "react";

interface TripleFlexContainerProps {
    children: [ReactNode, ReactNode, ReactNode];
    style?: CSSProperties
    style_mob?: CSSProperties
  }

const TripleFlexContainer: React.FC<PropsWithChildren<TripleFlexContainerProps>> = ({ children, style, style_mob }) => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
    const checkScreen = () => {
        setIsMobile(window.innerWidth <= 700);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className="triple_flex_container"
        style={style ? style : undefined}>

            {isMobile ? (
            <>
            <div className="triple_flex_container_mob"
            style={style_mob ? style_mob : undefined}>
                {children[0]}
                {children[2]}
            </div>
            {children[1]}
            </>
            ) : (
            <>
            {children[0]}
            {children[1]}
            {children[2]}
            </>
            )}
        </div>
    )
}

export default TripleFlexContainer