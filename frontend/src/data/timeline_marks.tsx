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
            value: 280
        },
        stage_id: 5
    },
    {
        mark: {
            label: "Новые острова",
            value: 520
        },
        stage_id: 5
    }
]