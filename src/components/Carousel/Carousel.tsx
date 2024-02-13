import React, { useEffect, useRef, useState } from 'react';
import images from '../../fixtures/images';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import s from './Carousel.module.css';

interface CarouselProps {
    isHeaderCarousel?: boolean;
}

export const Carousel = ({ isHeaderCarousel }: CarouselProps) => {
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
                    {visibleImages.map((image, index) => (
                        <div className={isHeaderCarousel ? s.bigImage : s.image} key={index}>
                            <RecipeCard
                                imageUrl={image}
                                recipeName={'Pâtes à la carbonara'}
                                description={
                                    'Delicious and flavorful recipe that will satisfy your taste buds. Yes my friend a good deal'
                                }
                                dietType={'Végétarien'}
                                isHeaderCarousel={isHeaderCarousel}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
