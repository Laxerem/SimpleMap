import React from "react";
import InfoImageContainer from "../../components/InfoImageContainer";
import { TextToolTip } from "../../components/TextToolTip";

const WayAfterSidney: React.FC = () => {

    return (
        <div className="stage_info_text">
            <h1>Период исследований</h1>
            <p>
                <b>20 мая, 1820 года</b> они покинули порт, чтобы провести зимний период в 
                <b> Тихом океане</b>, исследуя острова и собирая научные данные.
            </p>
            <br></br>
            <InfoImageContainer background_hover_size="200%" cursor_animation={true} border_radius="20px" imageUrl="/QueenBay.png"/>
            <p>
                <b>27 мая – 8 июня</b> они посетили <b>залив Королевы Шарлотты</b> (Новая Зеландия). 
                Встречи с <TextToolTip image="/maory.png" content="Ма́ори — коренной народ Новой Зеландии и основное население страны до прибытия европейцев.">маори</TextToolTip>, 
                сбор этнографических данных, закупка продовольствия.
            </p>

            <span className="quote">
                «Берег здесь образует обширный залив, заполненный плавающим льдом»
                <span className="quote_author">Судовой Журнал</span>
            </span>

            <h2>Научные исследования</h2>
            <h3>Новая Зеландия</h3>
            <ul>
                <li>
                    Провели картографирование залива, уточнив карты Джеймса Кука.
                </li>
                <li>
                    Встречались с маори, изучая их культуру, быт, обычаи. 
                    Записали данные о языке, одежде, украшениях и оружии.    
                </li>
            </ul>
            <h3>Полинезия (острова Тихого океана)</h3>
            <ul>
                <li>
                    На Таити изучали культуру <TextToolTip image="/polineisy.png" content="Полинезийцы — группа родственных народов, населяющих острова Полинезии в Тихом океане.">полинезийцев</TextToolTip>, их социальную структуру, религию, танцы и ремёсла.
                </li>
                <li>
                    Уточнили координаты островов, особенно в архипелаге Туамоту.
                </li>
            </ul>
        </div>
    )
}

export default WayAfterSidney