export type Preview_info = {
  delay: Number,
  image_directory: String
}

const Home_presentation: React.FC<React.PropsWithChildren<{info: Preview_info}>> = ({info}) => {
  return (
  <div className='preview antarctica'>
    <h1 className='home_name'>Открытие <br></br>Антарктиды</h1>
    <div className='home_navigation'>
      <div className='block_navigation russia_map'>
        <span>Карта</span>
      </div>
      <div className='block_navigation'>
        <span>Атлас</span>
      </div>
    </div>
  </div>
)
}

export default Home_presentation