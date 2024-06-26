import React, { PropsWithChildren } from 'react';

import { CarouselProps } from '../../../resources/carousel/domain/carousel';
import { Swiper, SwiperSlide } from '../Swiper/Swiper';

export const Carousel = ({
    children,
    isHeaderCarousel,
    maxNumberOfCards,
}: PropsWithChildren<CarouselProps>) => {
    const effectiveChildren = Array.isArray(children) ? children : [children];
    const selectedChildren = maxNumberOfCards
        ? effectiveChildren.slice(0, maxNumberOfCards)
        : effectiveChildren;

    return (
        <>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                mousewheel={{
                    forceToAxis: true,
                }}
                breakpoints={{
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                        navigation: {
                            enabled: true,
                        },
                    },
                    720: {
                        slidesPerView: 2.2,
                        spaceBetween: 22,
                        navigation: {
                            enabled: false,
                        },
                    },
                    300: {
                        slidesPerView: isHeaderCarousel ? 1.2 : 2.2,
                        spaceBetween: 10,
                        navigation: {
                            enabled: false,
                        },
                    },
                }}
                navigation={true}
                grabCursor={true}
            >
                {selectedChildren.map((child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
