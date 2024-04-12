import React, { useState } from 'react';
import cx from 'classnames';
import s from './SearchMenu.module.css';

export const SearchMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            className={cx(s.menuContainer, {
                [s.hiddenMenu]: isMenuOpen,
                [s.showMenu]: !isMenuOpen,
            })}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <p>hello</p>
        </div>
    );
};
