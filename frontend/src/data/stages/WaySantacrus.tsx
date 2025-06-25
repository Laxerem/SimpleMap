import React from "react"
import InfoImageContainer from "../../components/InfoImageContainer"
import { TextToolTip } from "../../components/TextToolTip"

const WaySantacrus: React.FC = () => {
    return (
        <div className="stage_info_text">
            <InfoImageContainer border_radius="20px" imageUrl="/shtorm.png"/>
            <br></br>
            <p>
                <b>26 августа</b> отряд двинулся на <b>Тенерифе</b>, где надлежало запастись 
                вином и свежими припасами.
            </p>
            <p>
                В <b>Атлантике</b> на шлюпах установился рабочий ритм: экипаж был разделён на 
                три вахты, в случае 
                <TextToolTip content="Авра́л — работа на судне, выполняемая всем или почти всем экипажем."> аврала </TextToolTip> 
                это позволяло поднимать уже отдохнувшую часть команды.
            </p>

            <h2>Интересные факты</h2>
            <ul>
                <li>
                    <b>Шторм у экватора:</b>
                    <br></br> 
                    В сентябре корабли попали в жестокий шторм – <b>«Мирный» </b> 
                    получил повреждения, но <b>Лазарев</b> смог его отремонтировать в море.
                    <br></br>
                </li>
            </ul>
            
        </div>
    )
}

export default WaySantacrus