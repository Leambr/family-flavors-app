import cx from 'classnames';
import React, { useState } from 'react';

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
