import React from "react";
import TripleFlexContainer from "../../components/TripleFlexContainer";
import ShipImage from "../../components/ShipImage";

const MapPreview: React.FC = () => {

    return (
        <TripleFlexContainer
        style={{marginTop: "20vh", padding: 0}}
        style_mob={{padding: 0}}>
            <ShipImage imageUrl="/ship_3.png"/>
            <div className="block_text">
                <h2>Корабли</h2>
                <p>
                    Экспедиция под командованием Беллинсгаузена и Лазарева стала одной 
                    из самых значительных в истории географических открытий, навсегда 
                    изменив представления человечества о Южном полушарии.
                    <br></br><br></br>
                    По инициативе Российской империи два шлюпа — «Восток» и «Мирный» — 
                    отправились из Кронштадта с целью проверить гипотезу 
                    о существовании легендарного южного континента, «Терра Аустралис».
                </p>
            </div>
            <ShipImage imageUrl="/ship_4.png"/>
        </TripleFlexContainer>
    )
}

export default MapPreview