export type Recipe = {
    id: number;
    title: string;
    dietType: string;
    serving: number;
    prepTime: number;
    cookTime: number;
    instruction: string;
    imageUrl: string;
    seasonId: number;
    dishTypeId: number;
    // rajouter la propriété description
};

export type RecipeResponse = { recipes: Recipe[] };
