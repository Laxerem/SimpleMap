import React from "react"
import InfoImageContainer from "../../components/InfoImageContainer"
import { TextToolTip } from "../../components/TextToolTip"

const AtlanticaStage: React.FC = () => {

    return (
        <div className="stage_info_text">
            <h1>Атлантические приключения</h1>
            <p>
                Экспедиция Беллинсгаузена и Лазарева покинула <b>Санта-Крус</b> (Тенерифе) 
                <b> в сентябре</b> <b>1819 года</b>, и двинулась переплывать <b>Атлантический океан</b>.
            </p>
            <InfoImageContainer border_radius="20px" imageUrl="/Atlantica_sea.png"/>
            <h2>Организация</h2>
            <p>
                Шлюпы держались в пределах видимости друг друга. <b>«Восток»</b> был быстрее, 
                но <b>Лазарев</b> на <b>«Мирном»</b> обеспечивал синхронность. 
            </p>
            <p>
                Использовали хронометры Арнольда и Барро, секстанты и рефракторы для определения 
                координат.
                <br></br> 
                Регулярно сверяли курс по звёздам и солнцу.
            </p>
            <h2>Научные исследования</h2>
            <h3>Океанографические исследования</h3>
            <ul>
                <li>
                    <b>8 октября 1819 года</b> они измерили плотность и температуру морской воды на глубине 
                    <b> 310 фатомов</b> (примерно 567 метров), зафиксировав <b>78 °F</b> (26 °C).
                </li>
                <li>
                    Измерили скорость экваториального течения, используя медный котёл, 
                    погружённый на <b>50 фатомов</b> (91 метр), и определили её как <b>9 миль</b> в день.
                </li>
            </ul>
            <h3>Биологические наблюдения</h3>
            <ul>
                <li>
                    <b>25 сентября 1819 года</b> были зафиксированы
                    <TextToolTip 
                    content="Летучие рыбы — семейство морских лучепёрых рыб отряда сарганообразных. 
                    Отличительной особенностью рыб является их необычно большие грудные плавники, 
                    позволяющие рыбам выпрыгивать из воды и осуществлять непродолжительный планирующий полёт. " 
                    image="/fly_fish.png"> летающие рыбы </TextToolTip>, 
                    ветвящиеся пиросомы и киты, что способствовало изучению 
                    биоразнообразия <b>Атлантического океана</b>.
                </li>
            </ul>
        </div>
    )
}

export default AtlanticaStage