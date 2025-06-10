import { SliderProps, SxProps, Theme } from "@mui/material";
import { ITimeLineSettings } from "./interface/ITimeLineSettings";

const timeLineStyle: SxProps<Theme> = {
    "& .MuiSlider-track": {
      height: 8,
      backgroundColor: "#ff5722",
      borderRadius: 4,
      transition: "all 0.3s ease", // Плавный переход
      "&:hover": {
        backgroundColor: "#ff7043", // Более тёмный оранжевый при наведении
        boxShadow: "0 0 6px rgba(255, 87, 34, 0.5)", // Лёгкое свечение
      },
    },
    "& .MuiSlider-rail": {
      height: 8,
      backgroundColor: "#ffccbc",
      opacity: 0.7,
      borderRadius: 4,
    },
    "& .MuiSlider-thumb": {
      width: 24,
      height: 24,
      backgroundColor: "#ff5722",
      border: "2px solid #ffffff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease", // Плавный переход
      "&:hover, &.Mui-focusVisible": {
        width: 26,
        height: 26,
        boxShadow: "0 0 10px rgba(255, 87, 34, 0.7)", // Усиленное свечение
      },
    },
    "& .MuiSlider-markLabel": {
      color: "#ffffff",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1vw"
    },
  };

const timeLineProps: SliderProps = {
    "aria-label": "Temperature",
    color: 'error',
    min: 0,
    sx: timeLineStyle,
}

export const TimeLineSettings: ITimeLineSettings = {
    props: timeLineProps
}