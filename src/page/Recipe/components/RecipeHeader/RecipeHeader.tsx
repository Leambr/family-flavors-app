import React from 'react';

import { Recipe } from '../../../../resources/recipe/domain/recipeCard';

import s from './RecipeHeader.module.css';

export const RecipeHeader = ({
    imageUrl,
    recipeName,
    prepTime,
    cookTime,
    dietType,
    description,
}: Recipe) => {
    return (
        <>
            <section className="main-container-cover mb-72 mb-104">
                <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
            </section>
            <section className="main-container mb-72 mb-104">
                <h3 className={s.recipeName}>{recipeName}</h3>
                <div className={s.recipeTimes}>
                    <p>Préparation : {prepTime} min</p>
                    <p>Cuisson : {cookTime} min</p>
                    <p>{dietType}</p>
                </div>
                <p>{description}</p>
            </section>
        </>
    );
};
