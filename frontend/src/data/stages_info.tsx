import { StagesData } from "../pages/map/settings/interface/IWaySettings";
import InitialStage from "../components/stages/InitialStage";

const stages_info: StagesData = {
    0: {
        stage_component: InitialStage,
        status: "В пути"
    }
}

export {stages_info}