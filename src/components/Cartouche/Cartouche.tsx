import React from 'react';
import s from './Cartouche.module.css';
import { Card } from '../Card/Card';
import food from '../../assets/images/food.jpg';

export const Cartouche = () => {
    return (
        <>
            <Card className={s.cardWrapper}>
                <img src={food} className={s.cartoucheImage} />
            </Card>
        </>
    );
};
