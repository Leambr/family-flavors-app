import * as esbuild from 'esbuild';
import { createBuildSettings } from './settings.js';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

const settings = createBuildSettings({
    minify: true,
    entryNames: 'static/[ext]/[name]-[hash]',
    assetNames: 'static/assets/[name]',
    plugins: [CssModulesPlugin({ v2: true })],
});

await esbuild.build(settings);
