import React from "react"
import InfoImageContainer from "../../components/InfoImageContainer"

const SidneyStage: React.FC = () => {

    return (
        <div className="stage_info_text">
            <InfoImageContainer border_radius="20px" imageUrl="/sidney.png"/>
            <p>
                <b>28 марта «Восток»</b> под командованием Беллинсгаузена вошёл 
                в <b>Порт-Джексон</b>, а <b>7 апреля</b> прибыл <b>«Мирный»</b>.
            </p>
            <p>
                <b>Сидней</b> стал спасительной гаванью после <b>130-дневного</b> антарктического похода.
            </p>
            <p>
                Здесь отремонтировали повреждённые льдами шлюпы, пополнили запасы провизии и 
                подготовились к новому броску - <b>ледяному континенту</b>, проверяя каждую деталь снаряжения.
            </p>
        </div>
    )
}

export default SidneyStage