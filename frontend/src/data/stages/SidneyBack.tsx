import React from "react"
import InfoImageContainer from "../../components/InfoImageContainer"

const SidneyBack: React.FC = () => {

    return (
        <div className="stage_info_text">
            <h1>Подготовка к Антарктиде</h1>
            <p>
                Экспедиция <b>Беллинсгаузена</b> и <b>Лазарева</b> вернулась в Сидней <b>10 сентября 1820 года</b>
            </p>
            <InfoImageContainer border_radius="20px" imageUrl="/sidney-2.png"/>
            <p>
                Возвращение в <b>Сидней</b> стало важным этапом подготовки к антарктическим 
                исследованиям — здесь удалось провести необходимый ремонт кораблей, 
                в частности укрепить мачты <b>«Востока»</b>, а также пополнить запасы 
                провизии.
            </p>
        </div>
    )
}

export default SidneyBack