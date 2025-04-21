import React, { useState, useEffect } from "react";
import Discoverer from "./discover"
import { DiscoverParams } from "./discover"


const belling: DiscoverParams = {
  name: "Белленсгаузен Фаддей",
  image_class: "belling",
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
  hide_name: "Михаил Петрович Лазарев (1788–1851)",
  description: "Капитан шлюпа 'Мирный' в экспедиции Беллинсгаузена, флотоводец.",
  facts: ["Участвовал в открытии Антарктиды 28 января 1820 года.", 
    "Усовершенствовал конструкцию 'Мирного', сделав его более пригодным для плавания во льдах.",
    "Позже стал командующим Черноморским флотом, воспитал таких моряков, как Нахимов и Корнилов."
  ]
}

const Discoverers_content = () => {
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    checkScreen(); // установить при загрузке
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
  <div className="discoverers_container">
    {isMobile ? (
      <>
      <div className="discoverers_mob">
        <Discoverer discover={belling}/>
        <Discoverer discover={lazar}/>
      </div>
      <Discoverers_content />
      </>
    ) : (
    <>
    <Discoverer discover={belling}/>
    <Discoverers_content />
    <Discoverer discover={lazar}/>
    </>
    )}
  </div>
)
}

export default Discovers_container