import React from 'react';
import { IconProps } from './iconTypes';

export const ScrolldownDots = ({ color, ...props }: IconProps): JSX.Element => (
    <svg width="10" height="64" viewBox="0 0 10 64" fill="none" {...props}>
        <circle cx="5" cy="5" r="5" fill={color} />
        <circle cx="5" cy="23" r="5" fill={color} />
        <circle cx="5" cy="41" r="5" fill={color} />
        <circle cx="5" cy="59" r="5" fill={color} />
    </svg>
);
