import React, { PropsWithChildren } from 'react';
import s from './Card.module.css';

export const Card = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
    return <div className={`${s.cardWrapper} ${className}`}>{children}</div>;
};
