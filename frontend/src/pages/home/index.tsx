import "./styles/index.scss"
import Home_presentation, { PreviewInfo } from "./components/preview"
import Discovers_container from "./components/discovers_container"
import Antarctica_facts from "./components/facts"
import Prehistory from "./components/prehistory"

const preview_settings: PreviewInfo = {
  delay: 5,
  image_directory: "./"
}

const Home = () => {
  return (
    <main>
      <Home_presentation info={preview_settings} />
      <Discovers_container />
      <Antarctica_facts />
      <Prehistory />
      <div className="home_footer">
        <span>Открытие</span>
        <span>Антарктиды</span>
      </div>
    </main>
  )
}

export default Home
