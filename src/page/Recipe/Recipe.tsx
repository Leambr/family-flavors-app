import React from 'react';

import quiche from '../../assets/quiche.jpg';

import { RecipeHeader } from './components/RecipeHeader/RecipeHeader';

export const Recipe = () => {
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
        </div>
    );
};
