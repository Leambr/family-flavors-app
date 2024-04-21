import React from 'react';

import { RecipeCardProps } from '../../../../../resources/recipe/domain/recipeCard';

import s from './RecipeCardDescription.module.css';

export const RecipeCardDescription = ({
    dietType,
    recipeName,
    description,
}: Partial<RecipeCardProps>) => {
    return (
        <>
            <div className={s.nameAndDescription}>
                <div className={s.titleContainer}>
                    <p className={s.dietType}>{dietType}</p>
                    <p className={s.recipeName}>{recipeName}</p>
                </div>
                <p>{description}</p>
            </div>
        </>
    );
};
