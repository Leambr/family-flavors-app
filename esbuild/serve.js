import esbuild from 'esbuild';
import { createBuildSettings } from './settings.js';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

const settings = createBuildSettings({
    sourcemap: true,
    banner: {
        js: `new EventSource('/esbuild').addEventListener('change', () => location.reload())`,
    },
    plugins: [
        htmlPlugin({
            files: [
                {
                    entryPoints: ['src/app.tsx'],
                    filename: 'index.html',
                    htmlTemplate: './index.html',
                },
            ],
        }),
        CssModulesPlugin({
            v2: true,
        }),
    ],
});

const ctx = await esbuild.context(settings);

await ctx.watch();

const { host, port } = await ctx.serve({
    port: 3000,
    servedir: 'public/',
});

console.log(`Serving app at ${host}:${port}.`);
