import { CSSProperties } from "react"
import { Stages } from "../pages/map/settings/interface/IWaySettings"
import AntarcticaStage from "./stages/AntarcticaStage"
import InitialStage from "./stages/InitialStage"
import KopengagenStage from "./stages/KopengagenStage"
import PortsmouthStage from "./stages/PortsmouthStage"
import SantacrusStage from "./stages/SantacrusStage"
import WaySantacrus from "./stages/WaySantacrus"
import AtlanticaStage from "./stages/AtlanticaStage"
import RioStage from "./stages/RioStage"
import WayAntarctica from "./stages/WayAntarctica"
import SidneyStage from "./stages/SidneyStage"
import WayAustralia from "./stages/WayAustralia"
import WayAfterSidney from "./stages/WayAfterSidney"
import SidneyBack from "./stages/SidneyBack"
import NewIslandsStage from "./stages/NewIslandsStage"
import ByeSidney from "./stages/ByeSidney"

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
        point_index: 330,
        stage_info: {
            stage_component: AtlanticaStage
        },
        box_style: {
            background: `
                url('/sea.gif') center/cover no-repeat`
        }
    },
    8: {
        name: "Остановка в Рио",
        point_index: 365,
        stage_info: {
            stage_component: RioStage
        }
    },
    9: {
        name: "Плавание к Южному Полюсу",
        point_index: 485,
        stage_info: {
            stage_component: WayAntarctica
        },
        box_style: {
            background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), 
            url('/southern_ocean.png') center/cover no-repeat`,
            backgroundSize: "100%",
            animation: "gradientMoveCenterBottom 40s ease-in-out infinite"
        }
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
    11: {
        name: "Путь к Австралии",
        point_index: 635,
        stage_info: {
            stage_component: WayAustralia
        },
        box_style: {
            background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), 
            url('/southern_ocean.png') center/cover no-repeat`,
            backgroundSize: "100%",
            animation: "gradientMoveCenterBottom 40s ease-in-out infinite"
        }
    },
    12: {
        name: "Остановка в Сидней",
        point_index: 675,
        stage_info: {
            stage_component: SidneyStage
        }
    },
    13: {
        name: "Исследование Океании",
        point_index: 888,
        stage_info: {
            stage_component: WayAfterSidney
        },
        box_style: {
            background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), 
            url('/ocean.png') center/cover no-repeat`,
            backgroundSize: "100%",
            animation: "gradientMoveCenterBottom 40s ease-in-out infinite"
        }
    },
    14: {
        name: "Возвращение в Сидней",
        point_index: 930,
        stage_info: {
            stage_component: SidneyBack
        }
    },
    15: {
        name: "Отплытие из Сиднея",
        point_index: 970,
        stage_info: {
            stage_component: ByeSidney
        }
    },
    16: {
        name: "Открытие новых Островов",
        point_index: 1060,
        stage_info: {
            stage_component: NewIslandsStage
        }
    },
    17: {
        name: "Лиссабон",
        point_index: 1228
    }
}