import React from 'react';
import { Card } from '../Card/Card';
import pasta from '../../../public/pasta.jpg';
import s from './RecipeCard.module.css';

export const RecipeCard = () => {
    return (
        <Card className={s.cardWrapper}>
            <img src={pasta} className={s.image} alt="Pasta Recipe" />
        </Card>
    );
};
