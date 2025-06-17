import React from "react";
import InfoImageContainer from "../../components/InfoImageContainer";

const AntarcticaStage: React.FC = () => {

    return (
        <>
            <InfoImageContainer imageUrl="/antarctica_stage.png"/>
            <div className="stage_info_text">
                <h1>Открытие нового материка</h1>
                <p>
                Корабли достигли шельфового ледника Антарктиды (ныне <b>Берег Принцессы Марты</b>).
                </p>
                <p>
                    Русские шлюпы <b>«Восток»</b> и <b>«Мирный»</b> приблизились к неизвестному ледяному массиву.
                    Однако из-за льдов высадиться не удалось.
                </p>
                <p> 
                    В точке с координатами <b>69°21′</b> южной широты и <b>2°14′</b> западной долготы участники 
                    экспедиции зафиксировали сплошную стену материкового льда.
                </p>
                <p>
                    Это был шельфовый ледник, позже названный в честь Принцессы Марты, — 
                    первое подтвержденное свидетельство существования Антарктиды.
                </p>
                <br></br>
                <InfoImageContainer border_radius={20} cursor_animation={true} imageUrl="/marta_shore.png"/>
                <br></br>
                <span className="quote">
                    «Мы увидели сплошной лёд, простирающийся до горизонта».
                    <span className="quote_author">Ф.Ф Беллинсгаузен</span>
                </span>
            </div>
        </>
    )
}

export default AntarcticaStage