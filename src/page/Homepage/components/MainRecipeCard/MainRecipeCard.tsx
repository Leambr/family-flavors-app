import { Link } from '@mui/material';
import React from 'react';

import { Recipe } from '../../../../api/resources/recipes/types';

import curry from '../../../../assets/curry.jpg';
import pancakes from '../../../../assets/pancakes.jpg';
import pasta from '../../../../assets/pasta.jpg';
import { Card } from '../../../../shared/components/Card/Card';

import s from './MainRecipeCard.module.css';

interface MainRecipeCardProps {
    recipe: Recipe;
    index: number;
    colors: string[];
}
export const MainRecipeCard = ({ recipe, index, colors }: MainRecipeCardProps) => {
    // TODO: Remove this line when the imageUrl is available in the API
    const imagesFixtures = [curry, pancakes, pasta];
    recipe.imageUrl = imagesFixtures[index % imagesFixtures.length];

    return (
        <Link key={recipe.id} href="/recipe" underline="none" color="none">
            <Card
                className={s.cardWrapper}
                style={{
                    backgroundColor: colors[index % colors.length],
                    color:
                        colors[index % colors.length] === 'var(--color-green-800)'
                            ? 'var(--color-blue-100)'
                            : 'var(--color-body)',
                }}
            >
                <div className={s.imageWrapper}>
                    <img src={recipe.imageUrl} className={s.image} alt="Pasta Recipe" />
                </div>

                <div className={s.cardDescription}>
                    <div className={s.titleContainer}>
                        <p className={s.dietType}>{recipe.dietType}</p>
                        <p className={s.recipeName}>{recipe.title}</p>
                    </div>
                    {/* TODO: ajouter la propriété description à la place quand elle sera disponible dans l'api */}
                    <p>{recipe.instruction}</p>
                </div>
            </Card>
        </Link>
    );
};
