import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export type PreviewInfo = {
  delay: number;
  images: Array<string>;
  transition: number;
};

type BlockNavigation = {
  name: string;
  link: string;
  classname: string;
};

const HomePresentation: React.FC<{ info: PreviewInfo }> = ({ info }) => {
  const navigate = useNavigate();
  const [currentImageId, setCurrentImageId] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]); // Массив для всех таймеров

  const blocks: BlockNavigation[] = [
    {
      name: "Карта",
      link: "/map",
      classname: "block_navigation background_map",
    },
    {
      name: "Атлас",
      link: "/atlas",
      classname: "block_navigation",
    },
  ];

  const next_index = (array: Array<any>) => {
    return array.length > currentImageId + 1 ? currentImageId + 1 : 0;
  };

  useEffect(() => {
    // Очистка всех предыдущих таймеров
    timeoutRefs.current.forEach((timer) => clearTimeout(timer));
    timeoutRefs.current = []; 

    setOpacity(0); 
    const firstTimeout = setTimeout(() => {
      setOpacity(1); // Показываем
      const secondTimeout = setTimeout(() => {
        setCurrentImageId(next_index(info.images));
      }, info.transition * 600);
      timeoutRefs.current.push(secondTimeout); 
    }, info.delay - info.transition * 1000);

    timeoutRefs.current.push(firstTimeout); 

    // Очистка при размонтировании
    return () => {
      timeoutRefs.current.forEach((timer) => clearTimeout(timer));
      timeoutRefs.current = [];
    };
  }, [currentImageId, info.delay, info.transition, info.images.length]);

  return (
    <div
      className="antarctica"
      style={{
        backgroundImage: `url(${info.images[currentImageId]})`, // Исправлен синтаксис
      }}
    >
      <div
        style={{
          backgroundColor: `rgba(0,0,0,${opacity})`,
          transition: `${info.transition}s`,
        }}
      >
        <div className="preview">
          <h1 className="home_name">
            Открытие <br />
            Антарктиды
            <h3>1820 год </h3>
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