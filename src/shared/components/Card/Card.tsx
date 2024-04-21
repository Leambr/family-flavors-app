import React, { PropsWithChildren } from 'react';

import s from './Card.module.css';

export const Card = ({
    children,
    className,
    style,
}: PropsWithChildren<{ className?: string; style?: React.CSSProperties }>) => {
    return (
        <div className={`${s.cardWrapper} ${className}`} style={style}>
            {children}
        </div>
    );
};
