import React from "react";
import InfoImageContainer from "../../components/InfoImageContainer";

const AntarcticaStage: React.FC = () => {

    return (
        <>

            <p>
            Корабли достигли шельфового ледника Антарктиды (ныне Берег Принцессы Марты).
            </p>
            <p> 
            Однако из-за льдов высадиться не удалось.
            </p>

            <p>
                Сияние утреннего солнца на зеркальной поверхности льда 
                вдохновило одного из офицеров, который сделал зарисовки 
                этого завораживающего зрелища.
            </p>
            <span className="quote">
                «Мы увидели сплошной лёд, простирающийся до горизонта».
                <span className="quote_author">Ф.Ф Беллинсгаузен</span>
            </span>
            <InfoImageContainer imageUrl="/marta_shore.png"/>
        </>
    )
}

export default AntarcticaStage