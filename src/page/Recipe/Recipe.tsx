import React from 'react';

import quiche from '../../assets/quiche.jpg';

import { IngredientsList } from './components/IngredientsList/IngredientsList';

import { RecipeHeader } from './components/RecipeHeader/RecipeHeader';

export const Recipe = () => {
    const ingredients = [
        'Tomates',
        'Thon',
        'Basilic',
        'Crème fraîche',
        'Pâte brisée',
        'Fromage râpé',
    ];

    return (
        <div className="layout-with-centered-content">
            <RecipeHeader
                prepTime={0}
                cookTime={0}
                recipeName={'Quiche à la tomate avec thon et basilic'}
                description={
                    'Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu Un excellent tiramisu  Un excellent tiramisu  Un excellent tiramisu  Un excellent tiramisu   '
                }
                dietType={'Végétarien'}
                imageUrl={quiche}
            />

            <section className="main-container mb-72 mb-104">
                <h4>Ingrédients</h4>
                {ingredients.map((ingredient) => (
                    <IngredientsList ingredientName={ingredient} />
                ))}
            </section>
        </div>
    );
};
