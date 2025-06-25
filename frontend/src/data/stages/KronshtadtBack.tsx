import React from "react";
import { TextToolTip } from "../../components/TextToolTip";

const KronshtadtBack: React.FC = () => {
    return(
        <div className="stage_info_text">
            <h1>Возвращение домой</h1>
            <p>
                Путь пролегал через <b>Атлантику</b> и <b>Балтийское море</b>, 
                через <TextToolTip image="/straits.png" content="Да́тские проли́вы (Балтийские проливы) — система проливов между 
                Скандинавским и Ютландским полуостровами, соединяющая Балтийское море с Северным.">Датские проливы</TextToolTip>, 
                в <span className="green">Кронштадт</span>.
            </p>
            <p>
                Переход занял <b>13 дней</b>, расстояние — около <b>2000 морских миль</b>, средняя скорость — 6–7 узлов.
            </p>
        </div>
    )
}

export default KronshtadtBack