import React from 'react';
import { Card } from '../Card/Card';
import s from './RecipeCard.module.css';

interface RecipeCardProps {
    imageUrl: string;
    recipeName: string;
    description: string;
    dietType: string;
}

export const RecipeCard = ({ imageUrl, recipeName, description, dietType }: RecipeCardProps) => {
    return (
        <Card className={s.cardWrapper}>
            <div className={s.imageWrapper}>
                <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
            </div>
            <div className={s.nameAndDescription}>
                <p className={s.dietType}>{dietType}</p>
                <p className={s.recipeName}>{recipeName}</p>
                <p className={s.description}>{description}</p>
            </div>
        </Card>
    );
};
