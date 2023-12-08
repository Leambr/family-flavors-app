export function createBuildSettings(options) {
    return {
        entryPoints: ['src/app.tsx'],
        outdir: 'public',
        bundle: true,
        ...options,
    };
}
