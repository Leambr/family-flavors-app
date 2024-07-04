import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { BurgerMenu } from '../../../../design-system/icons/BurgerMenu';
import { Logo } from '../../../../design-system/icons/Logo';
import { Search } from '../../../../design-system/icons/Search';

import s from './NavbarDesktop.module.css';

export const NavbarDesktop = () => {
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
        <>
            <div
                className={
                    isVisible ? s.navbarContainer : cx(s.navbarContainer, s.navbarNoBackground)
                }
            >
                <div>
                    <Logo color={isVisible ? 'var(--color-blue-100)' : 'var(--color-body)'} />
                </div>
                <div className={s.menuRight}>
                    <Search color={isVisible ? 'var(--color-blue-100)' : 'var(--color-body)'} />
                    <BurgerMenu color={isVisible ? 'var(--color-blue-100)' : 'var(--color-body)'} />
                </div>
            </div>
        </>
    );
};
