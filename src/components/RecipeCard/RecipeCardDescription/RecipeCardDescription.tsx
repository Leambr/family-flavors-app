import React from 'react';
import s from './RecipeCardDescription.module.css';
import { RecipeCardProps } from '../../../domain/recipeCard/recipeCard';

export const RecipeCardDescription = ({ dietType, recipeName, description }: RecipeCardProps) => {
    return (
        <>
            <div className={s.nameAndDescription}>
                <p className={s.dietType}>{dietType}</p>
                <p className={s.recipeName}>{recipeName}</p>
                <p>{description}</p>
            </div>
        </>
    );
};
