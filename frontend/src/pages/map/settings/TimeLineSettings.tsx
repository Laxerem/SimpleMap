import { SliderProps, SxProps, Theme } from "@mui/material";
import { ITimeLineSettings } from "./interface/ITimeLineSettings";

const timeLineStyle: SxProps<Theme> = {
    '.MuiSlider-markLabel': {
        color: 'white'
    }
}

const timeLineProps: SliderProps = {
    "aria-label": "Temperature",
    color: 'error',
    min: 0,
    sx: timeLineStyle,
}

export const TimeLineSettings: ITimeLineSettings = {
    props: timeLineProps
}