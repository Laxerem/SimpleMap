import { PropsWithChildren, useEffect, useState } from "react";
import '../styles/stage_info.scss'
import { MissionStats, StatusCard } from "./MissionStats";

interface StageInfoProps {
    mission_stats?: MissionStats
}

const StageInfo: React.FC<PropsWithChildren<StageInfoProps>> = ({ children, mission_stats }) => {
    const [minWidth, setMinWidth] = useState<number>(0)
    const [width, setWidth] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(0);
    const [content, setContent] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        setContent(null)
        setWidth(0);
        setMinWidth(0)

        setTimeout(() => {
            setWidth(23);
        }, 800);
        setTimeout(() => {
            setMinWidth(200)
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
            width: `${width}vw`
        }}
        >
        <div style={{ opacity: `${opacity}`, transition: "1s" }}>
            {content}
            {mission_stats ? <StatusCard summary={mission_stats}/> : null}
        </div>
        </div>
    );
};

export default StageInfo;