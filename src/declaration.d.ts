declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare namespace JSX {
    interface IntrinsicElements {
        'swiper-container': React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            navigation: string;
            // Add more properties
        };
        'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            lazy: string;
            // Add more properties
        };
    }
}
