import React from 'react';
import { ScrolldownDots } from '../../design-system/icons/ScrollDownDots';
import s from './Homepage.module.css';

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
                <div className={s.scrollDown}>
                    <p>Découvrir</p>
                    <div>
                        <ScrolldownDots color={'var(--color-dark-blue)'} />
                    </div>
                </div>
            </section>
        </>
    );
};
