import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/system';
import React from 'react';

import { NavbarDesktop } from './NavbarDesktop/NavbarDesktop';
import { NavbarMobile } from './NavbarMobile/NavbarMobile';

export const Navbar = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
};
