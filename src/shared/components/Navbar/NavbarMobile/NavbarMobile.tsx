import React from 'react';

import { BurgerMenu } from '../../../../design-system/icons/BurgerMenu';
import { Logo } from '../../../../design-system/icons/Logo';
import { Search } from '../../../../design-system/icons/Search';

import s from './NavbarMobile.module.css';

export const NavbarMobile = () => {
    return (
        <div className={s.navbarContainer}>
            <div>
                <Logo color={'var(--color-blue-100)'} />
            </div>
            <div className={s.menuRight}>
                <Search color={'var(--color-blue-100)'} />
                <BurgerMenu color={'var(--color-blue-100)'} />
            </div>
        </div>
    );
};
