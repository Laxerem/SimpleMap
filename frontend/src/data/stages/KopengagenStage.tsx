import React from "react";
import InfoImageContainer from "../../components/InfoImageContainer";

const KopengagenStage: React.FC = () => {

    return (
        <div className="stage_info_text">
            <h1>Остановка в Копенгагене</h1>
            <p>
                Шлюпы <b>«Восток»</b> и <b>«Мирный»</b> достигли <b>Копенгагена</b> в <b>июле 1819 
                года</b> после перехода через Балтийское море из <span className="green">Кронштадта</span>.
            </p>
            <br></br>
            <InfoImageContainer border_radius="20px" imageUrl="/KopengagenPort.png"/>
            <br></br>
            <p>
                В <b>Копенгагене</b> экспедиция получила уточнённые инструкции от российского командования.
            </p>
            <p>
                Точные детали инструкций не указаны, но они касались целей исследования южных морей.
            </p>
        </div>
    )
}

export default KopengagenStage