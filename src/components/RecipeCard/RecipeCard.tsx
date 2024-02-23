import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import s from './RecipeCard.module.css';
import { RecipeCardProps } from '../../domain/recipeCard/recipeCard';
import { RecipeCardDescription } from './RecipeCardDescription/RecipeCardDescription';

export const RecipeCard = ({
    imageUrl,
    recipeName,
    description,
    dietType,
    isHeaderCarousel,
    isActive,
}: RecipeCardProps) => {
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
    const isScreenSmall = screenSize < 720;

    const renderRecipeCardDescription = () => {
        if (!isScreenSmall && (isActive || isHeaderCarousel)) {
            return (
                <RecipeCardDescription
                    recipeName={recipeName}
                    description={description}
                    dietType={dietType}
                />
            );
        }
        return null;
    };

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
        <Card className={s.cardWrapper}>
            <div className={s.imageWrapper}>
                <img
                    src={imageUrl}
                    className={isHeaderCarousel ? s.bigImage : s.image}
                    alt="Pasta Recipe"
                />
                {isScreenSmall && (
                    <div className={s.nameOverlay}>
                        <p className={s.recipeName}>{recipeName}</p>
                    </div>
                )}
            </div>
            {renderRecipeCardDescription()}
        </Card>
    );
};
