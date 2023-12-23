import React, { useEffect, useRef, useState } from 'react';
import images from '../../fixtures/images';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import s from './Carousel.module.css';

export const Carousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    const maxImage = 6;

    const visibleImages = images.slice(0, maxImage);

    useEffect(() => {
        if (carousel.current) {
            const carouselWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
            setWidth(carouselWidth);
        }
    }, []);

    return (
        <div>
            <div className={s.carousel} ref={carousel}>
                <div className={s.innerCarousel}>
                    {visibleImages.map((image) => (
                        <div className={s.image} key={image}>
                            <RecipeCard imageUrl={image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
