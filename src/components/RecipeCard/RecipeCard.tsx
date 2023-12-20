import React from 'react';
import { Card } from '../Card/Card';
import s from './RecipeCard.module.css';

interface RecipeCardProps {
    imageUrl: string;
}

export const RecipeCard = ({ imageUrl }: RecipeCardProps) => {
    return (
        <Card className={s.cardWrapper}>
            <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
        </Card>
    );
};
