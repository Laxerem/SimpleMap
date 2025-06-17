import { PropsWithChildren, useState, useEffect } from "react"

interface ImageContainer {
    imageUrl: string,
    cursor_animation?: boolean
    border_radius?: string
    background_hover_size?: string
}

const InfoImageContainer: React.FC<PropsWithChildren<ImageContainer>> = ({imageUrl, cursor_animation, border_radius, background_hover_size}) => {
    const [cursorPosition, setCursorPosition] = useState<[number, number]>([0,0])
    const [isHover, setIsHover] = useState<boolean>(false)
    const [backgroundPos, setBackgroundPos] = useState<string>("")
    const [ImageBackgroundSize, setImageBackgroundSize] = useState<string | null>(null)

    useEffect(() => {
        if (isHover && cursor_animation) {
            const pos = [cursorPosition[0], cursorPosition[1] + 160]
            setBackgroundPos(`-${pos[0]}px -${pos[1]}px`)
            if (background_hover_size) {
                setImageBackgroundSize(background_hover_size)
            }
        }
        else {
            setBackgroundPos("center")
            setImageBackgroundSize("100%")
        }
    }, [isHover, cursorPosition])

    return(
        <div className="info_image_container" 
        style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: backgroundPos,
            borderRadius: border_radius,
            backgroundSize: ImageBackgroundSize ? ImageBackgroundSize : undefined
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