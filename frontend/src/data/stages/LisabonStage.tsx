import React from "react"
import InfoImageContainer from "../../components/InfoImageContainer"

const LisabonStage: React.FC = () => {
    return(
        <div className="stage_info_text">
            <InfoImageContainer background_hover_size="200%" cursor_animation={true} border_radius="20px" imageUrl="/lisabon.png"/>
            <p>
                Шлюпы <b>«Восток»</b> и <b>«Мирный»</b> прибыли в <b>Лиссабон 2 июня 1821 года </b> 
                после <b>45-дневного</b> перехода из <span className="yellow">Рио-де-Жанейро</span>. 
                Остановка длилась до <b>11 июля 1821 года</b>.
            </p>
            <p>
                <b>Беллинсгаузен</b> встречался с португальскими властями, представляя результаты 
                экспедиции (<b>открытие Антарктиды</b>, 29 островов).
            </p>
            <p>
                <b>Лиссабон</b> стал последней крупной остановкой, обеспечив ресурсы и отдых 
                перед возвращением в <span className="green">Кронштадт</span>.
            </p>
            <h2>Деятельность</h2>
            <p>
                Провели мелкий осмотр кораблей, устранили незначительные повреждения, 
                загрузили продовольствие. 
            </p>
        </div>
    )
}

export default LisabonStage