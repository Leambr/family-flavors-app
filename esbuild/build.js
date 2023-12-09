import * as esbuild from 'esbuild';
import { createBuildSettings } from './settings.js';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

const settings = createBuildSettings({ minify: true, plugins: [CssModulesPlugin({ v2: true })] });

await esbuild.build(settings);
