import React, { PropsWithChildren } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // основные стили
import 'swiper/css/navigation'; // если нужен navigation
import { EffectCoverflow, Navigation } from 'swiper/modules';

interface AtlasContainerProps {
    images: string[]
}

const AtlasContainer: React.FC<PropsWithChildren<AtlasContainerProps>> = ({images}) => {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }

    return (
        <div className="atlas_container">
            <div className="atlas_swiper">
                <Swiper
                {...params}
                modules={[Navigation, EffectCoverflow]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                >
                {images.map((src, index) => (
                    <SwiperSlide key={index}
                    className="atlas_image"
                    style={{
                        height: "70vh",
                        backgroundImage: `url(${src})`,
                    }}>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    )
}

export default AtlasContainer