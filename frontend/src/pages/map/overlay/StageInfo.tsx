import { PropsWithChildren, useEffect, useState } from "react";
import '../styles/stage_info.scss'

const StageInfo: React.FC<PropsWithChildren> = ({ children }) => {
    const [minWidth, setMinWidth] = useState<number>(0)
    const [width, setWidth] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(0);
    const [padding, setPadding] = useState<number>(0);
    const [content, setContent] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        setContent(null)
        setPadding(0);
        setWidth(0);

        setTimeout(() => {
            setWidth(23);
        }, 800);
        setTimeout(() => {
            setPadding(2);
        }, 1200);
        setTimeout(() => {
            setContent(children)
        }, 1400);
        setTimeout(() => {
            setOpacity(1);
        }, 1900);
    }, [children]);

    return (
        <div
        className="stage_info block_text"
        style={{
            minWidth: `${minWidth}px`,
            width: `${width}vw`,
            padding: `${padding}%`
        }}
        >
        <div className="stage_info_text" style={{ opacity: `${opacity}`, transition: "1s" }}>
            {content}
        </div>
        </div>
    );
};

export default StageInfo;