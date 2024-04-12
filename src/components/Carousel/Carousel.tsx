import React, { useEffect, useRef, useState } from 'react';
import images from '../../fixtures/images';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { Swiper, SwiperSlide } from '../Swiper/Swiper';

interface CarouselProps {
    isHeaderCarousel?: boolean;
}

export const Carousel = ({ isHeaderCarousel }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const maxImage = 6;
    const visibleImages = images.slice(0, maxImage);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                mousewheel={true}
                breakpoints={{
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                        navigation: {
                            enabled: true,
                        },
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        navigation: {
                            enabled: false,
                        },
                    },
                    300: {
                        slidesPerView: isHeaderCarousel ? 1 : 2,
                        spaceBetween: 10,
                        navigation: {
                            enabled: false,
                            nextEl: '',
                            prevEl: '',
                        },
                    },
                }}
                navigation={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 10,
                    slideShadows: false,
                    depth: 200,
                    modifier: 1,
                    stretch: 0,
                }}
                loop={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                grabCursor={true}
                on={{
                    slideChange: handleSlideChange, // Écouter l'événement slideChange
                }}
            >
                {visibleImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <RecipeCard
                            imageUrl={image}
                            recipeName={'Pâtes à la carbonara'}
                            description={
                                'Delicious and flavorful recipe that will satisfy your taste buds. Yes my friend a good deal'
                            }
                            dietType={'Végétarien'}
                            isHeaderCarousel={isHeaderCarousel}
                            isActive={index === activeIndex}
                            isDescription={true}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
