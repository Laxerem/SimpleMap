import React, { useRef } from "react";
import TripleFlexContainer from "../../components/TripleFlexContainer";
import ShipImage from "../../components/ShipImage";
import { motion, useScroll, useTransform } from "framer-motion";

const MapPreview: React.FC = () => {
    const text_container_ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        container: text_container_ref
    })

    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 1]);

    return (
        <TripleFlexContainer
        style={{marginTop: "20vh", padding: 0}}
        style_mob={{padding: 0}}>
            <ShipImage imageUrl="/ship_3.png" motionOptions={{
                initial: { backgroundPosition: "2000% 0" },
                animate: { backgroundPosition: "100% 0" },
                transition: {duration: 2}
            }}/>
            <div className="block_text" ref={text_container_ref}>
                <h2>Корабли</h2>
                <motion.div style={{
                    rotateX,
                    opacity,
                }}>
                <p>
                    Экспедиция под командованием Беллинсгаузена и Лазарева стала одной 
                    из самых значительных в истории географических открытий, навсегда 
                    изменив представления человечества о Южном полушарии.
                    <br></br><br></br>
                    По инициативе Российской империи два шлюпа — «Восток» и «Мирный» — 
                    отправились из Кронштадта с целью проверить гипотезу 
                    о существовании легендарного южного континента, «Терра Аустралис».
                </p>
                </motion.div>
            </div>
            <ShipImage imageUrl="/ship_4.png" motionOptions={{
                initial: { backgroundPosition: "-3000% 0" },
                animate: { backgroundPosition: "0% 0" },
                transition: {duration: 2}
            }}/>
        </TripleFlexContainer>
    )
}

export default MapPreview