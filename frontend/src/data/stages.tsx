import { CSSProperties } from "react"
import { Stages } from "../pages/map/settings/interface/IWaySettings"
import AntarcticaStage from "./stages/AntarcticaStage"
import InitialStage from "./stages/InitialStage"

export const DefaultStageStyle: CSSProperties = {
    background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('/blue_gradient.png') center/cover no-repeat`,
    backgroundSize: "100%",
    animation: "gradientMove 20s ease-in-out infinite"
}

export const stages: Stages = {
    0: {
        name: "Начало экспедиции",
        date: "1000",
        point_index: 0,
        stage_info: {
            stage_component: InitialStage,
            status: {
                location: "Кронштадт"
            }
        }
    },
    1: {
        name: "Путь в Данию",
        date: "1869",
        point_index: 75
    },
    2: {
        name: "Заход в Копенгаген",
        date: "1869",
        point_index: 100
    },
    3: {
        name: "Путь в Англию",
        date: "2000",
        point_index: 185
    },
    4: {
        name: "Заход в Портсмут",
        date: "2000",
        point_index: 210
    },
    5: {
        name: "Путь в Рио-Де-Жанейро",
        date: "2000",
        point_index: 360
    },
    6: {
        name: "Остановка в Рио-Де-Жанейро",
        date: "2000",
        point_index: 365
    },
    7: {
        name: "Открытие Антарктиды",
        date: "2000",
        point_index: 530,
        stage_info: {
            stage_component: AntarcticaStage,
            status: {
                location: "Антарктида"
            }
        },
        box_style: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url('/antarctica_stage.jpeg')`,
            backgroundSize: "cover",
            animation: "gradientSlowMove 20s ease-in-out infinite"
        }
    },
    8: {
        name: "Остановка в Сидней",
        date: "2000",
        point_index: 675
    },
    9: {
        name: "Остановка на острове Тенарифе",
        date: "2000",
        point_index: 271
    }
}