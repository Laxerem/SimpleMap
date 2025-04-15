import { useNavigate } from 'react-router-dom';

export type PreviewInfo = {
  delay: number;
  image_directory: string;
};

type BlockNavigation = {
  name: string;
  link: string;
  classname: string;
};

const HomePresentation: React.FC<React.PropsWithChildren<{ info: PreviewInfo }>> = ({ info }) => {
  const navigate = useNavigate();

  const blocks: BlockNavigation[] = [
    {
      name: 'Карта',
      link: '/map',
      classname: 'block_navigation background_map',
    },
    {
      name: 'Атлас',
      link: '/atlas',
      classname: 'block_navigation',
    }
    // сюда можно добавлять другие блоки
  ];

  return (
    <div className="preview antarctica">
      <h1 className="home_name">
        Открытие <br />
        Антарктиды
      </h1>
      <div className="home_navigation">
        {blocks.map((block, index) => (
          <div key={index} onClick={() => navigate(block.link)} className={block.classname}>
            <span>{block.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePresentation;
