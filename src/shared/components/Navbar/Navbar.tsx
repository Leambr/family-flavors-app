import React, { useEffect, useState } from 'react';

import { BurgerMenu } from '../../../design-system/icons/BurgerMenu';
import { Logo } from '../../../design-system/icons/Logo';
import { Search } from '../../../design-system/icons/Search';

import cx from 'classnames';

import s from './Navbar.module.css';

export const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={isVisible ? s.navbarContainer : cx(s.navbarContainer, s.navbarHidden)}>
            <div>
                <Logo color="var(--color-blue-100)" />
            </div>
            <div className={s.menuRight}>
                <Search color="var(--color-blue-100)" />
                <BurgerMenu color="var(--color-blue-100)" />
            </div>
        </div>
    );
};
