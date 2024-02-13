import React from 'react';
import { RecipeCardProps } from '../../../domain/recipeCard/recipeCard';
import { Card } from '../../Card/Card';
import { RecipeCardDescription } from '../RecipeCardDescription/RecipeCardDescription';
import s from './RecipeCardTextRight.module.css';

export const RecipeCardTextRight = ({
    imageUrl,
    recipeName,
    description,
    dietType,
}: RecipeCardProps) => {
    return (
        <Card className={s.cardWrapper}>
            <div className={s.imageWrapper}>
                <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
            </div>
            <div>
                <RecipeCardDescription
                    recipeName={recipeName}
                    description={description}
                    dietType={dietType}
                />
            </div>
        </Card>
    );
};
