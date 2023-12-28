import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import s from './RecipeCard.module.css';

interface RecipeCardProps {
    imageUrl: string;
    recipeName: string;
    description: string;
    dietType: string;
}

export const RecipeCard = ({ imageUrl, recipeName, description, dietType }: RecipeCardProps) => {
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
    const isScreenSmall = screenSize < 720;

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); //

    return (
        <Card className={s.cardWrapper}>
            <div className={s.imageWrapper}>
                <img src={imageUrl} className={s.image} alt="Pasta Recipe" />
                {isScreenSmall && (
                    <div className={s.nameOverlay}>
                        <p className={s.recipeName}>{recipeName}</p>
                    </div>
                )}
            </div>
            {!isScreenSmall && (
                <div className={s.nameAndDescription}>
                    <p className={s.dietType}>{dietType}</p>
                    <p className={s.recipeName}>{recipeName}</p>
                    <p>{description}</p>
                </div>
            )}
        </Card>
    );
};
