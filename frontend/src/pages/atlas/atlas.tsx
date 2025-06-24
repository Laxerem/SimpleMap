import React, { PropsWithChildren, ReactNode } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // основные стили
import 'swiper/css/navigation'; // если нужен navigation
import { Navigation } from 'swiper/modules';

interface AtlasContainerProps {
    images: string[]
}

const AtlasContainer: React.FC<PropsWithChildren<AtlasContainerProps>> = ({images}) => {

    return (
        <div className="atlas_container">
            <div className="atlas_swiper">
                <Swiper
                modules={[Navigation]}
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