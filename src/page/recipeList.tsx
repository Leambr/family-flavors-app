import React from 'react';
import { RecipeCard } from '../components/RecipeCard/RecipeCard';
import s from './recipeList.module.css';
import { Carousel } from '../components/Carousel/Carousel';
import pasta from '../assets/pasta.jpg';

export const RecipeList = () => {
    return (
        <section>
            <h2 className={s.title}>A base de pâtes</h2>
            {/* voir plus button */}

            <Carousel />
        </section>
    );
};
