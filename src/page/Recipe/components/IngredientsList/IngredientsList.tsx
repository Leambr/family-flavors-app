import { CheckCircleOutlineOutlined, CircleOutlined } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

import { Ingredient } from '../../../../resources/ingredient/domain/ingredient';

export const IngredientsList = ({ ingredientName }: Ingredient) => {
    return (
        <div>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CircleOutlined />}
                            checkedIcon={<CheckCircleOutlineOutlined />}
                        />
                    }
                    label={ingredientName}
                />
            </FormGroup>
        </div>
    );
};
