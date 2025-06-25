import InfoImageContainer from "../../components/InfoImageContainer"
import { TextToolTip } from "../../components/TextToolTip"

const ByeSidney = () => {
    return(
        <div className="stage_info_text">
            <h1>Прощай, Сидней</h1>
            <p>
                <b>17 ноября</b> шлюпы <b>«Восток»</b> и <b>«Мирный»</b> покинули Порт-Джексон (Сидней).
            </p>
            <p>
                Экспедиция достигла острова <b>Маккуори</b>, расположенного в <b>Южном океане</b>. 
                Остров был открыт в <b>1810 году</b> <TextToolTip content="Фредерик Хасселборо — австралийский капитан и морской зверобой из Сиднея. В 1810 году открыл в южной части Тихого океана острова Кэмпбелл и Маккуори.">Фредериком Хасселбором</TextToolTip>.
            </p>
            <InfoImageContainer background_hover_size="200%" cursor_animation={true} border_radius="20px" imageUrl="/macuory.png"/>
            <p>
                Из-за сильного прибоя и скалистых берегов русские моряки не смогли высадиться на остров, 
                ограничились наблюдением с борта. Это была краткая остановка для изучения фауны и 
                пополнения запасов.
            </p>
            <span className="quote">
                «Остров сей показался нам весьма высоким и обрывистым… Пингвинов и морских слонов было великое множество».
                <span className="quote_author">Ф.Ф Беллинсгаузен</span> 
            </span>
        </div>
    )
}

export default ByeSidney