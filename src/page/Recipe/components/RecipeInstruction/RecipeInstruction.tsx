import React from 'react';

import { Recipe } from '../../../../resources/recipe/domain/recipe';

import s from './RecipeInstruction.module.css';

export const RecipeInstruction = ({ instruction }: Pick<Recipe, 'instruction'>) => {
    return <p className={s.instruction}>{instruction}</p>;
};
