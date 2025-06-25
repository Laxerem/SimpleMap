import { Mark } from "@mui/material/Slider/useSlider.types"

interface ITimeLineMark {
    mark: Mark
    stage_id: number
}

export const timeLineMarks: ITimeLineMark[] = [
    {
        mark: {
            label: "Начало экспедиции",
            value: 0
        },
        stage_id: 0
    },
    {
        mark: {
            label: "Открытие Антарктиды",
            value: 275
        },
        stage_id: 5
    },
    {
        mark: {
            label: "Открытие островов",
            value: 720
        },
        stage_id: 5
    },
    {
        mark: {
            label: "Конец экспедиции",
            value: 1000
        },
        stage_id: 20
    }
]