import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

const BackgroundColorContext = createContext('');

export const useBackgroundColor = () => useContext(BackgroundColorContext);

export const BackgroundColorProvider = ({ children }: PropsWithChildren) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(
        'radial-gradient(50% 50% at 50% 50%, #3e484f 0%, #28333a 100%)'
    );

    useEffect(() => {
        const changeBackgroundOnScroll = () => {
            const newColor =
                window.scrollY > 150
                    ? 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)'
                    : 'radial-gradient(50% 50% at 50% 50%, #3e484f 0%, #28333a 100%)';
            setBackgroundColor(newColor);
            document.body.style.background = newColor;
        };

        window.addEventListener('scroll', changeBackgroundOnScroll);

        return () => window.removeEventListener('scroll', changeBackgroundOnScroll);
    }, []);

    return (
        <BackgroundColorContext.Provider value={backgroundColor}>
            {children}
        </BackgroundColorContext.Provider>
    );
};
