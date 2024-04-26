import React from 'react';

import pancakes from '../../assets/pancakes.jpg';
import { ScrolldownDots } from '../../design-system/icons/ScrollDownDots';

import images from '../../fixtures/images';
import { Carousel } from '../../shared/components/Carousel/Carousel';

import s from './Homepage.module.css';
import { MainRecipeCard } from './MainRecipeCard/MainRecipeCard';

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

            <section className="mb-40 mb-72 mb-104">
                <h3>Nos recettes à base de riz</h3>
                {/* <MainRecipeCard
                    recipeName={'Tiramisu'}
                    description={
                        'Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu '
                    }
                    dietType={'Végétarien'}
                    imageUrl={pancakes}
                    backgroundColor={'var( --color-beige)'}
                /> */}
                <Carousel isHeaderCarousel={true} maxNumberOfCards={6}>
                    {images.map((image, index) => (
                        <MainRecipeCard
                            key={index}
                            recipeName={'Tiramisu'}
                            description={
                                'Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu '
                            }
                            dietType={'Végétarien'}
                            imageUrl={image}
                            backgroundColor={'var( --color-beige)'}
                        />
                    ))}
                </Carousel>
            </section>
        </>
    );
};
