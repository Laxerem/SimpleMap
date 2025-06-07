import { PropsWithChildren, useEffect, useState } from "react";
import { StageData } from "../pages/map/settings/interface/IWaySettings";

interface StageInfoProps {
  data: StageData;
}

const StageInfo: React.FC<PropsWithChildren<StageInfoProps>> = ({ data }) => {
    const [width, setWidth] = useState<number>(0);
    const [text, setText] = useState<string>("");
    const [opacity, setOpacity] = useState<number>(0);
    const [padding, setPadding] = useState<number>(0);

    useEffect(() => {
        setText("");
        setPadding(0);
        setWidth(0);

        setTimeout(() => {
            setWidth(23);
        }, 800);
        setTimeout(() => {
            setPadding(2);
        }, 1200);
        setTimeout(() => {
            setText(data.status);
        }, 1400);
        setTimeout(() => {
            setOpacity(1);
        }, 1900);
    }, [data]);

    return (
        <div
        className="stage_info block_text"
        style={{
            width: `${width}vw`,
            padding: `${padding}%`
        }}
        >
        <div className="stage_info_text" style={{ opacity: `${opacity}`, transition: "1s" }}>
            <p>{text.repeat(100)}</p>
        </div>
        </div>
    );
};

export default StageInfo;