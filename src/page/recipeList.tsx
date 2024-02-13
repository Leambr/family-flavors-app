import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import s from './recipeList.module.css';
import { Header } from '../components/Header/Header';

export const RecipeList = () => {
    return (
        <>
            <section className="mb-40 mb-72 mb-104">
                <h2 className={s.title}>On adore cette saison</h2>
                {/* <Carousel isHeaderCarousel={true} /> */}
                <Header />
            </section>
            <section className="mb-40 mb-72 mb-104">
                <h2 className={s.title}>A base de riz</h2>
                {/* voir plus button */}

                <Carousel />
            </section>
            <section className="mb-40 mb-72 mb-104">
                <h2 className={s.title}>A base de pâtes</h2>
                {/* voir plus button */}

                <Carousel />
            </section>
            <section className="mb-40 mb-72 mb-104">
                <h2 className={s.title}>A base de pâtes</h2>
                {/* voir plus button */}

                <Carousel />
            </section>
        </>
    );
};
