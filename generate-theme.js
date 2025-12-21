#!/usr/bin/env node

import { generateThemeCSS } from './utils/themeGenerator.js';
import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// For ESM modules, we need to get the directory name differently
const __dirname = dirname(fileURLToPath(import.meta.url));

// Generate CSS from theme and write to file
const cssContent = generateThemeCSS();
const cssPath = './src/styles/theme.css';

writeFileSync(cssPath, cssContent);
console.log(`✅ Theme CSS generated successfully at ${cssPath}`);