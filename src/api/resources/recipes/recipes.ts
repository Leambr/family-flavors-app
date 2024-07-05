import { useQuery } from '@tanstack/react-query';

import { getEnv } from '../utils/getEnv';

import { RecipeResponse } from './types';

export const useGetRecipes = () => {
    const FAMILY_FLAVORS_API_URL = getEnv('FAMILY_FLAVORS_API_URL');

    return useQuery<RecipeResponse>({
        queryKey: ['recipes'],
        queryFn: () =>
            fetch(`${FAMILY_FLAVORS_API_URL}/recipe`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                if (!response.ok) {
                    throw {
                        response: response,
                        error: new Error(
                            `Error: ${response.url} ${response.status} ${response.statusText}`
                        ),
                    };
                }

                return response.json();
            }),
    });
};
