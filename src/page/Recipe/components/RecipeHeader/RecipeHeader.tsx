import React from 'react';

import { Recipe } from '../../../../resources/recipe/domain/recipe';

import s from './RecipeHeader.module.css';

export const RecipeHeader = ({
    imageUrl,
    recipeName,
    prepTime,
    cookTime,
    dietType,
    description,
}: Omit<Recipe, 'instruction'>) => {
    return (
        <div className={s.container}>
            <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
            <section className="main-container-fluid-desktop">
                <h3 className={s.recipeName}>{recipeName}</h3>
                <div className={s.recipeTimes}>
                    <p>Préparation : {prepTime} min</p>
                    <p>Cuisson : {cookTime} min</p>
                    <p>{dietType}</p>
                </div>
                <p>{description}</p>
            </section>
        </div>
    );
};
