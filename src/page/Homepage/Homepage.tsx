import React from 'react';
import s from './Homepage.module.css';
import { RecipeList } from '../RecipeList/RecipeList';
import cx from 'classnames';

export const Homepage = () => {
    return (
        <>
            <section className={s.landingContainer}>
                <div className={s.landingTitleContainer}>
                    <h1 className={s.title}>Family Flavors</h1>
                    <div className={s.subtitleContainer}>
                        <div className={s.trait}></div>
                        <div className={s.point}></div>
                        <p className={s.subtitle}>Nos recettes de famille dans votre assiette </p>
                    </div>
                </div>
            </section>
            <RecipeList />
        </>
    );
};
