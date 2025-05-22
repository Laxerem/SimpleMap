import { SliderProps } from "@mui/material"
import { Mark } from "@mui/material/Slider/useSlider.types"

interface ITimeLineSettings {
    props: SliderProps,
    marks: Mark[]
}

export type { ITimeLineSettings }