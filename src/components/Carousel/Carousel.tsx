import React, { useEffect, useRef, useState } from 'react';
import images from '../../fixtures/images';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import s from './Carousel.module.css';
import { Swiper, SwiperSlide } from '../Swiper/Swiper';

interface CarouselProps {
    isHeaderCarousel?: boolean;
}

export const Carousel = ({ isHeaderCarousel }: CarouselProps) => {
    const maxImage = 6;
    const visibleImages = images.slice(0, maxImage);

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
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        navigation: {
                            enabled: false,
                            nextEl: '',
                            prevEl: '',
                        },
                    },
                }}
                // navigation={true}
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
                margin={20}
                grabCursor={true}
            >
                {visibleImages.map((image) => (
                    <SwiperSlide>
                        <RecipeCard
                            imageUrl={image}
                            recipeName={'Pâtes à la carbonara'}
                            description={
                                'Delicious and flavorful recipe that will satisfy your taste buds. Yes my friend a good deal'
                            }
                            dietType={'Végétarien'}
                            isHeaderCarousel={isHeaderCarousel}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
