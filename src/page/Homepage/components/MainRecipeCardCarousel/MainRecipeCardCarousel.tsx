import React from 'react';

import { useGetRecipes } from '../../../../api/resources/recipes/recipes';
import { Carousel } from '../../../../shared/components/Carousel/Carousel';
import { MainRecipeCard } from '../MainRecipeCard/MainRecipeCard';

export const MainRecipeCardCarousel = () => {
    const { data } = useGetRecipes();

    const colors = ['var(--color-beige)', 'var(--color-green-800)', 'var(--color-gray-300)'];

    const recipes = data?.recipes;

    return (
        <Carousel isHeaderCarousel={true} maxNumberOfCards={3}>
            {recipes?.map((recipe, index) => (
                <MainRecipeCard key={recipe.id} recipe={recipe} index={index} colors={colors} />
            ))}
        </Carousel>
    );
};
