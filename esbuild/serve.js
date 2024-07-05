import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import dotenv from 'dotenv';
import esbuild from 'esbuild';

import CssModulesPlugin from 'esbuild-css-modules-plugin';

import { createBuildSettings } from './settings.js';

dotenv.config();

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
                    define: {
                        FAMILY_FLAVORS_API_URL: process.env.FAMILY_FLAVORS_API_URL,
                    },
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
    fallback: `public/index.html`,
});

console.log(`Serving app at ${host}:${port}.`);
