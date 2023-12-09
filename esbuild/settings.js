export function createBuildSettings(options) {
    return {
        entryPoints: ['src/app.tsx'],
        outdir: 'public',
        bundle: true,
        metafile: true,
        loader: {
            '.woff2': 'file',
            '.woff': 'file',
            '.css': 'css',
            '.svg': 'file',
            '.png': 'file',
            '.ttf': 'file',
        },
        ...options,
    };
}
