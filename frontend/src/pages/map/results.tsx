import React from "react";
import EndInfoBlock, { EndBlockContent } from "../../components/EndInfoBlock";

const TextResults: React.FC = () => {

    return (
        <p>
            Открытие Антарктиды русской экспедицией стало не просто географическим прорывом — 
            это был момент, когда человечество впервые прикоснулось к последней великой тайне Земли. 
            Смелость Беллинсгаузена и Лазарева, а также их команды, преодолевшие суровость морей, ледяные 
            ветры и суровые климатические условия, навсегда вписали своё имя в историю, доказав, что даже 
            самые далекие и холодные дали поддаются тому, кто готов рискнуть всем во имя знаний.
            <br></br><br></br>
            Сегодня Антарктида остается живой легендой — напоминанием о том, что даже в эпоху спутников 
            природа сохраняет свои последние священные места. Как и 200 лет назад, её ледяные просторы 
            продолжают звать исследователей — уже не за славой, а за знаниями, которые могут спасти нашу планету.
        </p>
    )
}

const content: EndBlockContent = {
    header: "Итоги Экспедиции",
    TextContent: TextResults,
    imageUrl: "/ship_2.png"
}

const ResultsExpedition: React.FC = () => {

    return (
        <EndInfoBlock content={content}/>
    )
}

export default ResultsExpedition