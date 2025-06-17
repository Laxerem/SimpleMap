import React from "react";
import InfoImageContainer from "../../components/InfoImageContainer";

const AntarcticaStage: React.FC = () => {

    return (
        <>
            
            <div className="stage_info_text">
                <h1>Открытие нового материка</h1>
                
                <p>
                Корабли достигли шельфового ледника Антарктиды (ныне <b>Берег Принцессы Марты</b>).
                </p>
                <p>
                    Русские шлюпы <b>«Восток»</b> и <b>«Мирный»</b> приблизились к неизвестному ледяному массиву.
                    Однако из-за льдов высадиться не удалось.
                </p>
                <InfoImageContainer border_radius="20px" imageUrl="/antarctica_stage.png"/>
                <p> 
                    В точке с координатами <b>69°21′</b> южной широты и <b>2°14′</b> западной долготы участники 
                    экспедиции зафиксировали сплошную стену материкового льда.
                </p>
                <p>
                    Это был шельфовый ледник — первое подтвержденное свидетельство существования Антарктиды.
                </p>
                <br></br>
                <InfoImageContainer 
                    border_radius={"20px"} 
                    cursor_animation={true}
                    background_hover_size="200%"
                    imageUrl="/marta_shore.png"
                />
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