import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type PreviewInfo = {
  delay: number;
  images: Array<string>;
  transition: number
};

type BlockNavigation = {
  name: string;
  link: string;
  classname: string;
};

const HomePresentation: React.FC<{ info: PreviewInfo }> = ({ info }) => {
  const navigate = useNavigate();
  const [currentImageId, setCurrentImageId] = useState<number>(0)
  const [opacity, setOpacity] = useState<number>(1)

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

  const next_index = (array: Array<any>) => {
    if (array.length > currentImageId + 1) {
      return currentImageId + 1
    }
    else {
      return 0
    }
  }

  useEffect(() => {
      setOpacity(0)
      setTimeout(() => {
        setOpacity(1)
        setTimeout(() => {
          setCurrentImageId(next_index(info.images))
        }, info.transition * 600)
      }, info.delay - (info.transition * 1000))
      
  }, [currentImageId])

  return (
    <div className="antarctica"
    style={{
      backgroundImage: `url(/${info.images[currentImageId]})`
    }}
    >
    <div style={{
      backgroundColor: `rgba(0,0,0,${opacity})`,
      transition: `${info.transition}s`
    }}>
      <div className='preview'>
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
      </div>
    </div>
  );
};

export default HomePresentation;
