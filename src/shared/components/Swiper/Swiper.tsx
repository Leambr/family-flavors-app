import React from 'react';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export function Swiper(props: any) {
    const swiperRef = useRef<any>(null);
    const { children, ...rest } = props;

    useEffect(() => {
        // Register Swiper web component
        register();

        // pass component props to parameters
        const params = {
            ...rest,
            injectStyles: [
                `.swiper-button-next, .swiper-button-prev {
                    top: var(--swiper-navigation-top-offset,50%)
                   
                }`,
                `.swiper-button-next, .swiper-button-prev {
                    color: var(--color-green-900)
                   
                }`,
                `.swiper-button-next, .swiper-button-prev {
                    width: calc(var(--swiper-navigation-size)/ 44 * 20)
                }`,
                `.swiper-button-next, .swiper-button-prev {
                    height: calc(var(--swiper-navigation-size)/ 44 * 20)

                }`,
                `.swiper-button-next, .swiper-button-prev {
                    background: var(--color-blue-100)
                }`,
                `.swiper-button-next, .swiper-button-prev {
                    border-radius: 50%
                }`,
                `.swiper-button-next, .swiper-button-prev {
                    padding: 10px
                }`,
            ],
        };

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    return (
        <swiper-container init="false" ref={swiperRef}>
            {children}
        </swiper-container>
    );
}
export function SwiperSlide(props: any) {
    const { children, ...rest } = props;

    return <swiper-slide {...rest}>{children}</swiper-slide>;
}
