import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "../../assets/styles/home.css"

const Home = () => {
  return (
    <main>
      <div className='home_preview image antarctica'>
        <div className='content'>
          <h1 className='home_name'>Открытие <br></br> Антарктиды</h1>
          <div className='home_navigation'>
            <div className='navigation_container'>
              <div className='block_navigation image russia_map'>
                <h3>Карта</h3>
              </div>
              <div className='block_navigation'>
                <h3>Атлас</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='discoverers'>
          <div className='discover'>
            <div className='belling image'>
              <p>edfwsdf</p>
            </div>
            <h2>Белленсгаузен Фаддей</h2>
          </div>
          <div className='discoverers_text'>
            <h2>Первооткрыватели</h2>
            <div className='discoverers_text_content'>
              <p>
                Первооткрывателями Антарктиды считаются участники русской 
                экспедиции под руководством Фаддея Беллинсгаузена и Михаила Лазарева.
              </p>
              <br></br>
              <p>
                В 1820 году на шлюпах «Восток» и «Мирный» они первыми подошли к берегам
                Антарктиды, доказав существование шестого континента. 
                Это событие стало одним из важнейших открытий в истории географических исследований.
              </p>
            </div>
          </div>
          <div className='discover'>
            <div className='lazar image'>
              
            </div>
            <h2>Лазарев Михаил</h2>
          </div>
      </div>
      <div className='about_antarctica'>
        <div className='about_antarctica_content'>
          <img className="antarctica_card" src='../../../public/Antarctica_card.png'/>
          <div className='antarctica_text'>
            <h2>Антарктида</h2>
            <div className='antarctica_text_content'>
              <p>
                Антарктида — самый южный континент Земли, покрытый льдом. 
                Она была открыта в 1820 году в ходе русской экспедиции под 
                руководством Фаддея Беллинсгаузена и Михаила Лазарева. 
                Они первыми увидели берега Антарктиды с кораблей «Восток» и «Мирный».
              </p>
              <br></br>
              <p>
                Однако первая подтвержденная высадка 
                на континент произошла позже, в 1895 году, благодаря норвежской экспедиции.
              </p>
              <br></br>
              <p>
                Антарктида не принадлежит ни одной стране и используется в научных целях 
                согласно Договору об Антарктике (1959 год). Это самый холодный, сухой и ветреный континент 
                на планете.
              </p>
            </div>
          </div>
        </div>
        <div className='antarctica_facts'>
          <div className='facts'>
            <p>Открыта в 1820 году</p>
            <line></line>
            <p>Первая высадка в 1895</p>
            <line></line>
            <p>Самый южный континент</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home
