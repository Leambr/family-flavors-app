import React, { useEffect, useState } from 'react';

import { RecipeCardProps } from '../../../resources/recipe/domain/recipeCard';
import { Card } from '../../../shared/components/Card/Card';

import s from './MainRecipeCard.module.css';

export const MainRecipeCard = ({
    imageUrl,
    recipeName,
    description,
    dietType,
    backgroundColor,
}: RecipeCardProps) => {
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Card className={s.cardWrapper} style={{ backgroundColor: backgroundColor }}>
            <div className={s.imageWrapper}>
                <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
            </div>

            <div className={s.cardDescription}>
                <div className={s.titleContainer}>
                    <p className={s.dietType}>{dietType}</p>
                    <p className={s.recipeName}>{recipeName}</p>
                </div>
                <p>{description}</p>
            </div>
        </Card>
    );
};
