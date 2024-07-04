export interface RecipeCardProps {
    recipeName: string;
    description: string;
    dietType: string;
    imageUrl: string;
    backgroundColor?: string;
    isLargeMobileCard?: boolean;
}

export interface Recipe extends RecipeCardProps {
    prepTime: number;
    cookTime: number;
    instruction: string;
}
