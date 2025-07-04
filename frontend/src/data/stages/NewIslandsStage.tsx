import React from "react"
import InfoImageContainer from "../../components/InfoImageContainer"

const NewIslandsStage: React.FC = () => {
    return(
        <div className="stage_info_text">
            <h1>Новые открытия:</h1>
            <h3><b>Декабрь 1820 – январь 1821</b></h3>
            <h3>Остров Петра-I</h3>
            <InfoImageContainer background_hover_size="200%" cursor_animation={true} border_radius="20px" imageUrl="/atlas-5.png"/>
            <p>
                <b>10 января</b> открыли остров <b>Петра I</b> (68°50' ю.ш., 90°35' з.д.), названный в честь 
                <b> Петра Великого</b>. Ледяные поля помешали высадке, но остров был нанесён на карту.
            </p>
            <h3>Остров Александра-I</h3>
            <InfoImageContainer background_hover_size="200%" cursor_animation={true} border_radius="20px" imageUrl="/alecsandr.png"/>
            <p>
                <b>17 января</b> заметили берег с высокой горой названный островом <b>Александра I</b> в честь 
                императора <b>Александра I</b>. Позже выяснилось, что это крупнейший остров <b>Антарктики</b>.
            </p>
            <h2>Интересные факты</h2>
            <ul>
                <li>
                    <b>Ледяная ловушка:</b>
                    <br></br>
                    В <b>декабре 1820 года</b> корабли едва не раздавило льдами – спаслись только благодаря мастерству <b>Лазарева</b>.
                </li>
                <li>
                    Моряки обнаружили вулканический остров <b>Десепшен</b>, приняв его за обычную землю. Позже выяснилось, 
                    что это затопленный кратер.
                </li>
            </ul>
        </div>
    )
}

export default NewIslandsStage