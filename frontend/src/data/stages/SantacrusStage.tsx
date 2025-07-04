import React from "react";
import InfoImageContainer from "../../components/InfoImageContainer";
import { TextToolTip } from "../../components/TextToolTip";

const SantacrusStage: React.FC = () => {

    return (
        <div className="stage_info_text">
            <h1>Остановка на острове Тенерифе</h1>
            <p>
                Экспедиция <b>Беллинсгаузена</b> и <b>Лазарева </b>
                достигла <b>Санта-Круса</b> (Тенерифе, Канарские острова) 
                <b> 15 (27) сентября 1819 года</b>.
            </p>
            <br></br>
            <InfoImageContainer border_radius="20px" imageUrl="/tenerife_stage.png"/>
            <br></br>
            <p>
                Визит в <b>Санта-Крус</b> был технической остановкой для подготовки к длительному 
                переходу через <b>Атлантику</b>.
                <br></br>
                <br></br>
                Никаких научных исследований или значимых событий в источниках не отмечено.
            </p>
            <h2>Деятельность</h2>
            <ul>
                <li>
                    Пополнили запасы пресной воды и продовольствия для дальнейшего 
                    плавания к <span className="yellow">Рио-де-Жанейро</span>.
                </li>
                <li>
                    Закупили местное вино, что было обычной практикой для 
                    поддержания морального духа экипажа.
                </li>
                <li>
                    <b>Беллинсгаузен</b> и офицеры посетили город <b>Санта-Крус</b>, осматривая его 
                    <strong> достопримечательности</strong>. 
                    <br></br>
                    Подробности осмотра не описаны, но визит был кратким и носил 
                    практический характер.
                </li>
            </ul>
            <h2>Интересные факты</h2>
            <ul>
                <li>
                    <b>Шторм у экватора:</b>
                    <br></br> 
                    В сентябре корабли попали в жестокий шторм – <b>«Мирный» </b> 
                    получил повреждения, но <b>Лазарев</b> смог его отремонтировать в море.
                </li>
                <li>
                    <b>Восхождение на <TextToolTip image="/Taide.png" content="Те́йде (исп. Teide) — вулкан на острове Тенерифе, муниципалитет Ла-Оротава, самая высокая точка Испании, центр Национального парка Тейде.">вулкан Тейде:</TextToolTip></b>
                    <br></br> 
                    Несколько офицеров (включая астронома экспедиции 
                    <b> Ивана Симонова</b>) поднялись на вершину вулкана, 
                    чтобы провести геодезические измерения.
                </li>
                <li>
                    <b>«Тенерифские амулеты»</b>
                    <br></br>
                    Местные жители пытались обмануть русских, продавая им поддельные «лечебные» амулеты из лавы. <b>Беллинсгаузен</b> запретил матросам покупать «ерунду».
                </li>
            </ul>
        </div>
    )
}

export default SantacrusStage