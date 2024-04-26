import React from 'react';

import { ScrolldownDots } from '../../design-system/icons/ScrollDownDots';

import images from '../../fixtures/images';
import { Carousel } from '../../shared/components/Carousel/Carousel';

import s from './Homepage.module.css';
import { MainRecipeCard } from './MainRecipeCard/MainRecipeCard';

export const Homepage = () => {
    const colors = ['var(--color-beige)', 'var(--color-green-800)', 'var(--color-gray-300)'];

    return (
        <>
            <div className="layout-with-centered-content">
                <section className="main-container mb-40 mb-72 mb-104">
                    <div className={s.landingContainer}>
                        <div className={s.landingTitleContainer}>
                            <h1 className={s.title}>Family Flavors</h1>
                            <div className={s.subtitleContainer}>
                                <div className={s.trait}></div>
                                <div className={s.point}></div>
                                <p className={s.subtitle}>
                                    Nos recettes de famille dans votre assiette{' '}
                                </p>
                            </div>
                        </div>
                        <div className={s.scrollDown}>
                            <p>Découvrir</p>
                            <div>
                                <ScrolldownDots color={'var(--color-blue-300)'} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="main-container mb-40 mb-72 mb-104">
                    <h2>Nos recettes à base de riz</h2>
                    <Carousel isHeaderCarousel={true} maxNumberOfCards={8}>
                        {images.map((image, index) => (
                            <MainRecipeCard
                                key={index}
                                recipeName={'Tiramisu'}
                                description={
                                    'Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu '
                                }
                                dietType={'Végétarien'}
                                imageUrl={image}
                                backgroundColor={colors[index % colors.length]}
                            />
                        ))}
                    </Carousel>
                </section>

                <section className="main-container mb-40 mb-72 mb-104">
                    <h2>Tartes et quiches</h2>
                    <Carousel isHeaderCarousel={true} maxNumberOfCards={8}>
                        {images.map((image, index) => (
                            <MainRecipeCard
                                key={index}
                                recipeName={'Tiramisu'}
                                description={
                                    'Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu '
                                }
                                dietType={'Végétarien'}
                                imageUrl={image}
                                backgroundColor={colors[index % colors.length]}
                            />
                        ))}
                    </Carousel>
                </section>
            </div>
        </>
    );
};
