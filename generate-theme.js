#!/usr/bin/env node

import { generateThemeCSS } from './utils/themeGenerator.js';
import { writeFileSync } from 'fs';

// Generate CSS from theme and write to file
const cssContent = generateThemeCSS();
const cssPath = './src/styles/theme.css';

writeFileSync(cssPath, cssContent);
console.log(`✅ Theme CSS generated successfully at ${cssPath}`);