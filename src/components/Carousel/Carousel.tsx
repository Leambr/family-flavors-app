import React, { useEffect, useRef, useState } from 'react';
import s from './Carousel.module.css';
import images from '../../fixtures/images';
import { motion } from 'framer-motion';
import { RecipeCard } from '../RecipeCard/RecipeCard';

export const Carousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
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
