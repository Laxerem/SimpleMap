import { PropsWithChildren, useEffect, useState } from "react"
import { StageData } from "../pages/map/settings/interface/IWaySettings"

interface StageInfoProps {
    data: StageData
}

const StageInfo: React.FC<PropsWithChildren<StageInfoProps>> = ({data}) => {
    const [height, setHeight] = useState<number>(0)
    const [weight, setWeight] = useState<number>(15)
    
    const [text, setText] = useState<string>("")
    const [opacity, setOpacity] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setHeight(100)
            setWeight(30)
        }, 1)
        setTimeout(() => {
            setText(data.status)
        }, 900)
        setTimeout(() => {
            setOpacity(1)
        }, 1000)
    }, [])

    return (
        <div className="stage_info block_text"
        style={{height: `${height}%`, width: `${weight}vw`}}
        >
            <div style={{opacity: `${opacity}`, transition: "1s"}}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default StageInfo