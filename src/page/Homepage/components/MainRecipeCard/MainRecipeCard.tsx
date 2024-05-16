import { Link } from '@mui/material';
import React from 'react';

import { RecipeCardProps } from '../../../../resources/recipe/domain/recipeCard';
import { Card } from '../../../../shared/components/Card/Card';

import s from './MainRecipeCard.module.css';

export const MainRecipeCard = ({
    imageUrl,
    recipeName,
    description,
    dietType,
    backgroundColor,
}: RecipeCardProps) => {
    return (
        <Link href="/recipe" underline="none" color="none">
            <Card
                className={s.cardWrapper}
                style={{
                    backgroundColor: backgroundColor,
                    color:
                        backgroundColor === 'var(--color-green-800)'
                            ? 'var(--color-blue-100'
                            : 'var(--color-body)',
                }}
            >
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
        </Link>
    );
};
