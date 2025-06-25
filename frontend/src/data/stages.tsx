import { CSSProperties } from "react"
import { Stages } from "../pages/map/settings/interface/IWaySettings"
import AntarcticaStage from "./stages/AntarcticaStage"
import InitialStage from "./stages/InitialStage"
import KopengagenStage from "./stages/KopengagenStage"
import PortsmouthStage from "./stages/PortsmouthStage"
import SantacrusStage from "./stages/SantacrusStage"
import WaySantacrus from "./stages/WaySantacrus"

export const DefaultStageStyle: CSSProperties = {
    background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('/blue_gradient.png') center/cover no-repeat`,
    backgroundSize: "100%",
    animation: "gradientMove 20s ease-in-out infinite"
}

export const stages: Stages = {
    0: {
        name: "Начало экспедиции",
        point_index: 0,
        stage_info: {
            stage_component: InitialStage,
            status: {
                location: "Кронштадт"
            }
        },
        box_style: {
            background:`linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
                url('/Kronshtat_ship.png') center/cover no-repeat`,
            backgroundSize: "100%",
            animation: "gradientMoveCenterBottom 20s ease-in-out infinite"
        }
    },
    2: {
        name: "Заход в Копенгаген",
        point_index: 100,
        stage_info: {
            stage_component: KopengagenStage
        }
    },
    4: {
        name: "Остановка в Великобритании",
        point_index: 210,
        stage_info: {
            stage_component: PortsmouthStage 
        }
    },
    5: {
        name: "Путь к Тенерифе",
        point_index: 264,
        stage_info: {
            stage_component: WaySantacrus
        }
    },
    6: {
        name: "Остров Тенерифе",
        point_index: 272,
        stage_info: {
            stage_component: SantacrusStage
        }
    },
    7: {
        name: "Проход через Атлантику",
        point_index: 340
    },
    8: {
        name: "Остановка в Рио",
        point_index: 365
    },
    9: {
        name: "Движение на Юг",
        point_index: 485
    },
    10: {
        name: "Открытие Антарктиды",
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
    12: {
        name: "Остановка в Сидней",
        point_index: 675
    },
    16: {
        name: "Лиссабон",
        point_index: 1228
    }
}