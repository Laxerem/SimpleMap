import { PropsWithChildren, useState, useEffect } from "react"

interface ImageContainer {
    imageUrl: string
}

const InfoImageContainer: React.FC<PropsWithChildren<ImageContainer>> = ({imageUrl}) => {
    const [cursorPosition, setCursorPosition] = useState<[number, number]>([0,0])
    const [isHover, setIsHover] = useState<boolean>(false)
    const [backgroundPos, setBackgroundPos] = useState<string>("")

    useEffect(() => {
        if (isHover) {
            const pos = [cursorPosition[0], cursorPosition[1] + 160]
            setBackgroundPos(`-${pos[0]}px -${pos[1]}px`)
        }
        else {
            setBackgroundPos("center")
        }
    }, [isHover, cursorPosition])

    return(
        <div className="info_image_container" 
        style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: backgroundPos
        }}
        onMouseMove={(pos) => {
            const rect = pos.currentTarget.getBoundingClientRect();
            const x = pos.clientX - rect.left;
            const y = pos.clientY - rect.top;
            setCursorPosition([x, y]);
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
        </div>
    )
}

export default InfoImageContainer