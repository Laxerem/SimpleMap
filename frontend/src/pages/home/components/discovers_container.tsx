import React from "react";
import Discoverer from "./discover"
import { DiscoverParams } from "./discover"
import TripleFlexContainer from "../../../components/TripleFlexContainer";


const belling: DiscoverParams = {
  name: "Беллинсгаузен Фаддей",
  image_class: "belling",
  image_name: "Bellingshausen.png",
  hide_name: "Фаддей Фаддеевич Беллинсгаузен (1778–1852)",
  description: "Руководитель первой русской антарктической экспедиции.",
  facts: ["Командовал шлюпом 'Восток' в 1819–1821 гг., официально открыл Антарктиду.", 
    "Нанес на карту десятки новых островов и подтвердил существование шестого континента.",
    "Его книга 'Двукратные изыскания в Южном Ледовитом океане' стала важным научным трудом."
  ]
}

const lazar: DiscoverParams = {
  name: "Лазарев Михаил",
  image_class: "lazar",
  image_name: "Lazarev.png",
  hide_name: "Михаил Петрович Лазарев (1788–1851)",
  description: "Капитан шлюпа 'Мирный' в экспедиции Беллинсгаузена, флотоводец.",
  facts: ["Участвовал в открытии Антарктиды 28 января 1820 года.", 
    "Усовершенствовал конструкцию 'Мирного', сделав его более пригодным для плавания во льдах.",
    "Позже стал командующим Черноморским флотом, воспитал таких моряков, как Нахимов и Корнилов."
  ]
}

const Discoverers_content: React.FC = () => {
  return (
  <div className="block_text">
    <h2>Первооткрыватели</h2>
    <p>
      Первооткрывателями Антарктиды считаются участники русской 
      экспедиции под руководством Фаддея Беллинсгаузена и Михаила 
      Лазарева. 
      <br></br><br></br>
      В 1820 году на шлюпах «Восток» и «Мирный» они первыми подошли
      к берегам Антарктиды, доказав существование шестого континента. 
      Это событие стало одним из важнейших открытий в истории 
      географических исследований.
    </p>
  </div>
  )
} 

const Discovers_container = () => {
    
  return (
    <TripleFlexContainer>
      <Discoverer discover={belling}/>
      <Discoverers_content />
      <Discoverer discover={lazar}/>
    </TripleFlexContainer>
  )
}

export default Discovers_container