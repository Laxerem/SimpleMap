import React from "react";
import EndInfoBlock from "../../../components/EndInfoBlock";
import { EndBlockContent } from "../../../components/EndInfoBlock";

const TextContent: React.FC = () => {

    return (
        <p>
          До открытия Антарктиды долгое время существовали 
          гипотезы о существовании неизвестного южного континента, 
          который якобы уравновешивал земные массы. 
          Эти предположения основывались на древних теориях 
          и наблюдениях мореплавателей.
          <br></br><br></br>
          В XVIII веке Джеймс Кук, исследуя южные широты, 
          достиг границ Антарктики, но не смог увидеть сам 
          континент из-за льдов.
          <br></br><br></br>
          Лишь в 1820 году русская экспедиция под руководством 
          Фаддея Беллинсгаузена и Михаила Лазарева на кораблях 
          «Восток» и «Мирный» впервые увидела берега Антарктиды, 
          подтвердив её существование. 
          Это открытие стало важным этапом в изучении Земли.
          </p>
    )
}

const content: EndBlockContent = {
    header: "Дорога к открытию",
    TextContent: TextContent,
    imageUrl: "/ship.png"
}

const Prehistory: React.FC = () => {
    return (
        <EndInfoBlock content={content}/>
    )
}

export default Prehistory