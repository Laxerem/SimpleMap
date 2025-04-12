const Block_facts = () => {
  return (
    <div className='block_facts'>
      <div className='facts'>
        <p>Открыта в 1820 году</p>
        <line></line>
        <p>Первая высадка в 1895</p>
        <line></line>
        <p>Самый южный континент</p>
      </div>
    </div>
)
}

const Antarctica_facts = () => {
  return (
    <div className="antarctica_facts">
      <div className="antarctica_content">
      <img className="antarctica_card" src="Antarctica_card.png"></img>
      <div className="block_text">
        <h2>Антарктида</h2>
        <p>
            Антарктида — самый южный континент Земли, 
            покрытый льдом. Она была открыта в 1820 
            году в ходе русской экспедиции под руководством 
            Фаддея Беллинсгаузена и Михаила Лазарева. 
            Они первыми увидели берега Антарктиды 
            с кораблей «Восток» и «Мирный».
            <br></br><br></br>
            Однако первая подтвержденная высадка 
            на континент произошла позже, в 1895 году, 
            благодаря норвежской экспедиции.
            <br></br><br></br>
            Антарктида не принадлежит ни одной стране и 
            используется в научных целях согласно 
            Договору об Антарктике (1959 год). 
            Это самый холодный, сухой и ветреный континент 
            на планете.
        </p>
      </div>
      </div>
      <Block_facts />
    </div>
  )
}

export default Antarctica_facts