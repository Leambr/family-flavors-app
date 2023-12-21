import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import images from '../../fixtures/images';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import s from './Carousel.module.css';

export const Carousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (carousel.current) {
            const carouselWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
            setWidth(carouselWidth);
        }
    }, []);

    return (
        <motion.div ref={carousel} className={s.carousel}>
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className={s.innerCarousel}
            >
                {images.map((image) => (
                    <motion.div className={s.image} key={image}>
                        <RecipeCard imageUrl={image} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};