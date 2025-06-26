import React, { useRef } from "react";
import TripleFlexContainer from "../../components/TripleFlexContainer";
import ShipImage from "../../components/ShipImage";
import { motion } from "framer-motion";

const MapPreview: React.FC = () => {
    const text_container_ref = useRef<HTMLDivElement>(null)

    const scrollToSection = (scrollPosition: number) => {
        text_container_ref.current?.querySelector('.block_text')?.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    };

    return (
        <TripleFlexContainer
        style={{
            marginTop: "20vh", 
            padding: 0, 
            backgroundImage: "url(/waves2.svg)", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100%",
            transition: '1s'
        }}
        style_mob={{padding: 0}}>
            <ShipImage name="Восток" imageUrl="/ship_3.png" 
            motionOptions={{
                initial: { backgroundPosition: "2000% 0" },
                animate: { backgroundPosition: "100% 0" },
                transition: {duration: 2}
            }}
            hoverStyle={{
                cursor: 'pointer',
                transform: 'scale(1.03) rotate(-2deg)'
            }}
            handleClick={() => scrollToSection(1000)}
            />
            <div className="block_text" ref={text_container_ref}>
                <h2 style={{marginBottom: 10}}>Корабли</h2>
                <motion.div className="block_text" style={{
                width: "100%",
                maxHeight: "300px", // или любая другая фиксированная высота
                overflowY: "auto",  // автоматическая прокрутка по вертикали
                paddingRight: "8px" // чтобы скролл не наезжал на текст
            }}>
                <p>
                    Экспедиция под командованием <strong>Беллинсгаузена</strong> и <strong>Лазарева</strong> стала одной 
                    из самых значительных в истории географических открытий, навсегда 
                    изменив представления человечества о Южном полушарии.
                    <br></br><br></br>
                    По инициативе Российской империи два шлюпа — <strong>«Восток»</strong> и <strong>«Мирный»</strong> — 
                    отправились из <strong>Кронштадта</strong> с целью проверить гипотезу 
                    о существовании легендарного южного континента, «Терра Аустралис».
                    <br></br><br></br>
                    Оба корабля несли на борту современное для эпохи оборудование: хронометры, 
                    секстанты, термометры и даже противоцинготные запасы (квашеная капуста, 
                    сосновые настойки).
                    <br></br><br></br>
                    Их взаимодействие стало ключом к успеху: <strong>«Восток»</strong> выполнял роль разведчика,
                    а <strong>«Мирный»</strong> обеспечивал безопасность в сложных ледовых условиях.
                    <br></br><br></br>
                    <strong>«Мирный»</strong>, которым командовал <strong>Михаил Лазарев</strong>, изначально был построен как 
                    грузовое судно — ледокольный транспорт «Ладога». 
                    Перед экспедицией его тщательно переоборудовали: укрепили корпус 
                    дополнительной обшивкой из дуба и сосны, улучшили парусное
                    вооружение и оснастили системой отопления. 
                    Длина <strong>«Мирного»</strong> составляла 37 метров, а ширина — 9 метров. 
                    Несмотря на меньшую скорость, он был более устойчивым и 
                    маневренным в ледовых полях. Экипаж из 73 человек размещался в 
                    более комфортных, чем на <strong>«Востоке»</strong>, условиях.
                    <br></br><br></br>
                    <strong>«Восток»</strong> — флагманский корабль экспедиции — представлял собой <strong>трехмачтовый шлюп</strong>, 
                    построенный в 1818 году на верфях Великобритании. Его длина составляла около 40
                    метров, а ширина — 10 метров. Судно обладало высокой скоростью, 
                    но из-за облегченной конструкции и недостаточно прочной обшивки 
                    корпуса было уязвимо в столкновениях со льдами. Экипаж <strong>«Востока» </strong> 
                    насчитывал 117 человек, включая ученых, моряков и офицеров. 
                    На борту находились лаборатории, библиотека и запасы провизии, 
                    рассчитанные на многолетнее плавание. Однако теснота помещений 
                    и низкие температуры создавали сложные условия для жизни команды.
                </p>
                </motion.div>
            </div>
            <ShipImage name="Мирный" imageUrl="/ship_4.png" 
            motionOptions={{
                initial: { backgroundPosition: "-3000% 0" },
                animate: { backgroundPosition: "0% 0" },
                transition: {duration: 2}
            }}
            hoverStyle={{
                cursor: 'pointer',
            }}
            handleClick={() => scrollToSection(400)}
            />
        </TripleFlexContainer>
    )
}

export default MapPreview