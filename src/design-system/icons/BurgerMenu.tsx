import React from 'react';

import { IconProps } from './iconTypes';

export const BurgerMenu = ({ color, ...props }: IconProps): JSX.Element => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
        <path
            d="M2.25 9H15.75"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.25 4.5H15.75"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.25 13.5H15.75"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
