import React, { useEffect, useState } from 'react';
import images from '../../fixtures/images';
import pancakes from '../../assets/pancakes.jpg';
import { RecipeCardTextRight } from '../RecipeCard/RecipeCardTextRight/RecipeCardTextRight';
import s from './Header.module.css';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { Carousel } from '../Carousel/Carousel';

export const Header = () => {
    const maxImage = 3;

    const visibleImages = images.slice(0, maxImage);

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
    }, []);

    return (
        <>
            {isScreenSmall ? (
                <Carousel isHeaderCarousel={true} />
            ) : (
                <div className={s.headerLayout}>
                    <div className={s.mainRecipe}>
                        <RecipeCard
                            recipeName={'Pâtes'}
                            description={
                                'Delicious and flavorful recipe that will satisfy your taste buds. Yes my friend a good deal'
                            }
                            dietType={'Végétarien'}
                            imageUrl={pancakes}
                            isHeaderCarousel={true}
                            isDescription={false}
                        />
                    </div>
                    <div className={s.recipeColumn}>
                        <div className={s.test}>
                            <h2>On adore cette saison</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                                aperiam nihil atque, cupiditate expedita minus repellendus laborum
                                amet magnam est et labore a modi harum pariatur esse excepturi fugit
                                alias iusto. Unde repellendus culpa voluptatibus velit totam ab
                                cupiditate ea tenetur suscipit quidem tempore, minima quibusdam ut?
                                Excepturi, officia cumque.
                            </p>
                            <button>Voir la recette</button>
                        </div>

                        {/* {visibleImages.map((image, index) => (
                            <div key={index}>
                                <RecipeCardTextRight
                                    imageUrl={image}
                                    recipeName={'Pâtes à la carbonara'}
                                    description={
                                        'Delicious and flavorful recipe that will satisfy your taste buds. Yes my friend a good deal'
                                    }
                                    dietType={'Végétarien'}
                                />
                            </div>
                        ))} */}
                    </div>
                </div>
            )}
        </>
    );
};
