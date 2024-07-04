import React from 'react';

import quiche from '../../assets/quiche.jpg';

import { IngredientsList } from './components/IngredientsList/IngredientsList';

import { PeopleServing } from './components/PeopleServing/PeopleServing';
import { RecipeHeader } from './components/RecipeHeader/RecipeHeader';
import { RecipeInstruction } from './components/RecipeInstruction/RecipeInstruction';

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
            <section className="main-container-cover-mobile">
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
            </section>

            <section className="main-container mb-20">
                <h5>Portions</h5>
                <PeopleServing />
            </section>

            <section className="main-container mb-72 mb-104">
                <h4>Ingrédients</h4>
                {ingredients.map((ingredient) => (
                    <IngredientsList ingredientName={ingredient} />
                ))}
            </section>

            <section className="main-container mb-72 mb-104">
                <h4>Préparation</h4>
                <RecipeInstruction
                    instruction={
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, harum earum saepe in aliquid libero quos fuga natus neque culpa facere beatae, officiis officia nesciunt alias aspernatur delectus similique error odit repudiandae? Facere itaque, labore consequatur tempora molestiae mollitia, quas hic doloribus corrupti obcaecati laborum amet praesentium! Neque perferendis tempore optio aperiam incidunt id eum tempora praesentium sint inventore, suscipit pariatur delectus doloribus velit quas illo recusandae quae harum unde voluptatem quis facere consectetur, ad obcaecati! Dolor nisi vel quam totam asperiores quo possimus excepturi pariatur obcaecati, quibusdam rem minima reprehenderit sapiente assumenda id, facilis natus itaque praesentium maxime repellat rerum ducimus iste, distinctio a! Quis tempora voluptates nulla, tenetur voluptatibus eos eius ipsa numquam dicta eum obcaecati, dolore voluptas, cupiditate explicabo sequi provident iusto neque voluptatum illo quam accusamus? Perspiciatis esse quis accusantium necessitatibus voluptatem! Vel, dolorum quas! Harum dignissimos asperiores pariatur neque voluptate est debitis, doloribus expedita ad totam! Illum eveniet autem pariatur explicabo, repellat officia iste voluptas quod perspiciatis consectetur enim fugit assumenda sequi doloribus quam est delectus nemo impedit aut cupiditate numquam, doloremque ipsum! Ea velit dicta voluptates obcaecati necessitatibus explicabo in, facilis molestias! Minus cum aspernatur quam beatae? Eligendi, perspiciatis voluptates similique error nemo earum quos, ipsum incidunt totam neque voluptatum? Dolorum quidem doloribus, maxime laudantium rem voluptas vero exercitationem incidunt laborum ea? Praesentium, natus consequatur! Fuga minus incidunt quaerat maxime minima modi architecto velit officia ad sit sapiente autem quibusdam ab dignissimos ducimus alias dolore hic cum, quae, quis id ut. Voluptatibus, tenetur doloribus'
                    }
                />
            </section>
        </div>
    );
};
