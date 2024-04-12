import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Search } from '../../design-system/icons/Search';
import { Logo } from '../../design-system/icons/Logo';
import { BurgerMenu } from '../../design-system/icons/BurgerMenu';

import s from './Navbar.module.css';

export const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 100) {
                setIsScrolled(true);
            }
            if (window.scrollY < 100) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={isScrolled ? s.navbarContainer : s.navbarHidden}>
            <div>
                <Logo color="var(--color-light-blue)" />
            </div>
            <div className={s.menuRight}>
                <Search color="var(--color-light-blue)" />
                <BurgerMenu color="var(--color-light-blue)" />
            </div>
        </div>
    );
};
