import React from "react";
import InfoImageContainer from "../../components/InfoImageContainer";

const BackAtlantica: React.FC = () => {
    return(
        <div className="stage_info_text">
            <InfoImageContainer background_hover_size="200%" cursor_animation={true} border_radius="20px" imageUrl="/atlantica.png"/>
            <p>
                Шлюпы <b>«Восток»</b> и <b>«Мирный»</b> отплыли из <span className="yellow">Рио-де-Жанейро</span> 
                <b> 18 апреля 1821 года</b>.
            </p>
            <p>
                Путь пролегал через <b>Атлантику</b> к <b>Лиссабону</b>, куда прибыли <b>2 июня 1821 года</b>.
            </p>
            <p>
                Переход занял <b>45 дней</b>, расстояние составило около 5500 морских миль, 
                средняя скорость — 5–6 узлов.
            </p>
            <p>
                Переход прошёл без крупных инцидентов. Отсутствие штормов и стабильная 
                погода позволили сосредоточиться на рутинных задачах.
            </p>
        </div>
    )
}

export default BackAtlantica