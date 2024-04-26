import React from 'react';

import { RecipeCardProps } from '../../../../resources/recipe/domain/recipeCard';
import { Card } from '../../../../shared/components/Card/Card';

import s from './BasicRecipeCard.module.css';

export const BasicRecipeCard = ({
    imageUrl,
    recipeName,
    dietType,
    description,
}: RecipeCardProps) => {
    return (
        <Card className={s.cardWrapper}>
            <div className={s.imageWrapper}>
                <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
            </div>

            <div className={s.cardDescription}>
                <div className={s.titleContainer}>
                    <p className={s.dietType}>{dietType}</p>
                    <p className={s.recipeName}>{recipeName}</p>
                </div>
                <p className={s.description}>{description}</p>
            </div>
        </Card>
    );
};
