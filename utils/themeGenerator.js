import { theme } from '../theme.js';

// Utility function to generate CSS from the theme object
export function generateThemeCSS() {
  let css = ':root {\n';
  
  // Add colors
  if (theme.colors) {
    for (const [colorName, colorValues] of Object.entries(theme.colors)) {
      if (typeof colorValues === 'object' && colorValues !== null) {
        for (const [shade, value] of Object.entries(colorValues)) {
          if (typeof value === 'string') {
            // Handle special case for DEFAULT
            const shadeName = shade === 'DEFAULT' ? '' : `-${shade}`;
            css += `  --color-${colorName}${shadeName}: ${value};\n`;
          }
        }
      } else if (typeof colorValues === 'string') {
        css += `  --color-${colorName}: ${colorValues};\n`;
      }
    }
  }
  
  // Add typography
  if (theme.typography) {
    // Font families
    if (theme.typography.fontFamily) {
      for (const [fontName, value] of Object.entries(theme.typography.fontFamily)) {
        css += `  --font-family-${fontName}: ${value};\n`;
      }
    }
    
    // Font sizes
    if (theme.typography.fontSize) {
      for (const [sizeName, value] of Object.entries(theme.typography.fontSize)) {
        css += `  --font-size-${sizeName}: ${value};\n`;
      }
    }
    
    // Font weights
    if (theme.typography.fontWeight) {
      for (const [weightName, value] of Object.entries(theme.typography.fontWeight)) {
        css += `  --font-weight-${weightName}: ${value};\n`;
      }
    }
    
    // Line heights
    if (theme.typography.lineHeight) {
      for (const [heightName, value] of Object.entries(theme.typography.lineHeight)) {
        css += `  --line-height-${heightName}: ${value};\n`;
      }
    }
  }
  
  // Add spacing
  if (theme.spacing) {
    for (const [spacingName, value] of Object.entries(theme.spacing)) {
      // Replace dots with 'dot' for valid CSS variable names
      const safeName = spacingName.toString().replace(/\./g, '-dot-');
      css += `  --spacing-${safeName}: ${value};\n`;
    }
  }
  
  // Add border radius
  if (theme.borderRadius) {
    for (const [radiusName, value] of Object.entries(theme.borderRadius)) {
      css += `  --radius-${radiusName}: ${value};\n`;
    }
  }
  
  // Add box shadows
  if (theme.boxShadow) {
    for (const [shadowName, value] of Object.entries(theme.boxShadow)) {
      css += `  --shadow-${shadowName}: ${value};\n`;
    }
  }
  
  // Add transitions
  if (theme.transitions) {
    if (theme.transitions.duration) {
      for (const [durationName, value] of Object.entries(theme.transitions.duration)) {
        css += `  --transition-${durationName}: ${value};\n`;
      }
    }
  }
  
  // Add layout
  if (theme.layout) {
    if (theme.layout.maxWidth) {
      for (const [widthName, value] of Object.entries(theme.layout.maxWidth)) {
        css += `  --layout-max-width-${widthName}: ${value};\n`;
      }
    }
    if (theme.layout.section) {
      for (const [sectionProp, value] of Object.entries(theme.layout.section)) {
        css += `  --layout-section-${sectionProp}: ${value};\n`;
      }
    }
  }
  
  css += '}\n\n';

  // Add CSS class mappings to use the variables
  css += `/* CSS variables for Tailwind theme mapping */
/* This allows us to maintain the existing Tailwind class names while using our theme values */

/* Background colors */
.bg-slate-950 { background-color: var(--color-slate-950); }
.bg-slate-900 { background-color: var(--color-slate-900); }
.bg-slate-800 { background-color: var(--color-slate-800); }

.bg-cyan-500 { background-color: var(--color-primary-500); }
.bg-white { background-color: var(--color-text-primary); }
.bg-slate-900\\/50 { background-color: rgba(30, 41, 59, 0.5); } /* slate-900 at 50% opacity */
.bg-slate-900\\/40 { background-color: rgba(30, 41, 59, 0.4); } /* slate-900 at 40% opacity */
.bg-slate-900\\/30 { background-color: rgba(30, 41, 59, 0.3); } /* slate-900 at 30% opacity */
.bg-slate-900\\/10 { background-color: rgba(30, 41, 59, 0.1); } /* slate-900 at 10% opacity */
.bg-slate-950\\/80 { background-color: rgba(15, 23, 42, 0.8); } /* slate-950 at 80% opacity */
.bg-cyan-500\\/10 { background-color: rgba(14, 165, 233, 0.1); } /* cyan-500 at 10% opacity */
.bg-cyan-500\\/5 { background-color: rgba(14, 165, 233, 0.05); } /* cyan-500 at 5% opacity */
.bg-green-500\\/20 { background-color: rgba(16, 185, 129, 0.2); } /* green-500 at 20% opacity */
.bg-red-500\\/20 { background-color: rgba(239, 68, 68, 0.2); } /* red-500 at 20% opacity */

/* Text colors */
.text-white { color: var(--color-text-primary); }
.text-slate-200 { color: var(--color-text-secondary); }
.text-slate-300 { color: var(--color-text-secondary); }
.text-slate-400 { color: var(--color-text-tertiary); }
.text-slate-500 { color: var(--color-text-muted); }
.text-cyan-400 { color: var(--color-primary-400); }
.text-cyan-500 { color: var(--color-primary-500); }
.text-slate-950 { color: var(--color-slate-950); }
.text-green-500 { color: var(--color-accent-green); }
.text-red-500 { color: var(--color-accent-red); }

/* Border colors */
.border-slate-800 { border-color: var(--color-slate-800); }
.border-slate-700 { border-color: var(--color-slate-700); }
.border-cyan-500\\/20 { border-color: rgba(14, 165, 233, 0.2); } /* cyan-500 at 20% opacity */

/* Hover effects */
.hover\\:bg-cyan-400:hover { background-color: var(--color-primary-400); }
.hover\\:text-cyan-400:hover { color: var(--color-primary-400); }
.hover\\:text-white:hover { color: var(--color-text-primary); }
.hover\\:bg-slate-200:hover { background-color: var(--color-slate-200); }
.hover\\:bg-slate-800:hover { background-color: var(--color-slate-800); }
.hover\\:border-cyan-500\\/50:hover { border-color: rgba(14, 165, 233, 0.5); } /* cyan-500 at 50% opacity */
.hover\\:border-cyan-500\\/30:hover { border-color: rgba(14, 165, 233, 0.3); } /* cyan-500 at 30% opacity */
.hover\\:bg-slate-900\\/50:hover { background-color: rgba(30, 41, 59, 0.5); } /* slate-900 at 50% opacity */

/* Shadow effects */
.shadow-xl { box-shadow: var(--shadow-xl); }
.shadow-cyan-500\\/20 { box-shadow: var(--shadow-cyan); }

/* Gradient text */
.bg-clip-text.bg-gradient-to-r.from-cyan-400.to-blue-600 {
  background: linear-gradient(to right, var(--color-primary-400), var(--color-secondary-600));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Selection colors */
.selection\\:bg-cyan-500\\/30::selection {
  background-color: rgba(14, 165, 233, 0.3); /* cyan-500 at 30% opacity */
}
.selection\\:text-cyan-200::selection {
  color: #afe9ff; /* A light cyan for contrast */
}
*::selection {
  background-color: rgba(14, 165, 233, 0.3); /* cyan-500 at 30% opacity */
  color: #afe9ff; /* A light cyan for contrast */
}

/* Layout and sizing */
.py-24 { padding-top: var(--spacing-24); padding-bottom: var(--spacing-24); }
.pt-20 { padding-top: var(--spacing-20); }
.px-6 { padding-left: var(--spacing-6); padding-right: var(--spacing-6); }
.py-20 { padding-top: var(--spacing-20); padding-bottom: var(--spacing-20); }
.py-12 { padding-top: var(--spacing-12); padding-bottom: var(--spacing-12); }
.py-8 { padding-top: var(--spacing-8); padding-bottom: var(--spacing-8); }
.py-6 { padding-top: var(--spacing-6); padding-bottom: var(--spacing-6); }
.py-4 { padding-top: var(--spacing-4); padding-bottom: var(--spacing-4); }
.py-3 { padding-top: var(--spacing-3); padding-bottom: var(--spacing-3); }
.py-2 { padding-top: var(--spacing-2); padding-bottom: var(--spacing-2); }
.py-1\\.5 { padding-top: var(--spacing-1-dot-5); padding-bottom: var(--spacing-1-dot-5); }

.px-8 { padding-left: var(--spacing-8); padding-right: var(--spacing-8); }
.px-4 { padding-left: var(--spacing-4); padding-right: var(--spacing-4); }
.px-2 { padding-left: var(--spacing-2); padding-right: var(--spacing-2); }

.mb-16 { margin-bottom: var(--spacing-16); }
.mb-12 { margin-bottom: var(--spacing-12); }
.mb-8 { margin-bottom: var(--spacing-8); }
.mb-6 { margin-bottom: var(--spacing-6); }
.mb-4 { margin-bottom: var(--spacing-4); }
.mb-2 { margin-bottom: var(--spacing-2); }
.mt-6 { margin-top: var(--spacing-6); }
.mt-20 { margin-top: var(--spacing-20); }
.mt-12 { margin-top: var(--spacing-12); }
.mt-8 { margin-top: var(--spacing-8); }

.ml-3 { margin-left: var(--spacing-3); }
.mr-3 { margin-right: var(--spacing-3); }
.mr-4 { margin-right: var(--spacing-4); }

.ml-auto { margin-left: auto; }
.mr-auto { margin-right: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }

.space-x-3 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(var(--spacing-3) * var(--tw-space-x-reverse)); margin-left: calc(var(--spacing-3) * calc(1 - var(--tw-space-x-reverse))); }
.space-x-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(var(--spacing-4) * var(--tw-space-x-reverse)); margin-left: calc(var(--spacing-4) * calc(1 - var(--tw-space-x-reverse))); }
.space-x-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(var(--spacing-6) * var(--tw-space-x-reverse)); margin-left: calc(var(--spacing-6) * calc(1 - var(--tw-space-x-reverse))); }
.space-x-12 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(var(--spacing-12) * var(--tw-space-x-reverse)); margin-left: calc(var(--spacing-12) * calc(1 - var(--tw-space-x-reverse))); }

.space-y-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(var(--spacing-2) * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(var(--spacing-2) * var(--tw-space-y-reverse)); }
.space-y-3 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(var(--spacing-3) * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(var(--spacing-3) * var(--tw-space-y-reverse)); }
.space-y-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(var(--spacing-4) * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(var(--spacing-4) * var(--tw-space-y-reverse)); }
.space-y-8 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(var(--spacing-8) * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(var(--spacing-8) * var(--tw-space-y-reverse)); }

/* Border radius */
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-2xl { border-radius: var(--radius-2xl); }
.rounded-3xl { border-radius: var(--radius-3xl); }
.rounded-full { border-radius: var(--radius-full); }

/* Width and height */
.w-20 { width: var(--spacing-20); }
.h-1 { height: var(--spacing-1); }
.h-8 { height: var(--spacing-8); }
.h-10 { height: var(--spacing-10); }
.h-px { height: var(--spacing-px); }
.w-8 { width: var(--spacing-8); }
.w-12 { width: var(--spacing-12); }
.w-1\\.5 { width: var(--spacing-1-dot-5); }
.h-1\\.5 { height: var(--spacing-1-dot-5); }
.w-5 { width: var(--spacing-5); }
.h-5 { height: var(--spacing-5); }
.w-full { width: 100%; }
.h-full { height: 100%; }
.min-h-screen { min-height: 100vh; }
.min-h-\\[100vh\\] { min-height: 100vh; }

/* Font sizes */
.text-4xl { font-size: var(--font-size-4xl); }
.text-5xl { font-size: var(--font-size-5xl); }
.text-6xl { font-size: var(--font-size-6xl); }
.text-2xl { font-size: var(--font-size-2xl); }
.text-xl { font-size: var(--font-size-xl); }
.text-lg { font-size: var(--font-size-lg); }
.text-base { font-size: var(--font-size-base); }
.text-sm { font-size: var(--font-size-sm); }
.text-xs { font-size: var(--font-size-xs); }
.text-8xl { font-size: var(--font-size-8xl); }
.text-\\[10px\\] { font-size: 10px; }

/* Font weights */
.font-bold { font-weight: var(--font-weight-bold); }
.font-black { font-weight: var(--font-weight-black); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-mono { font-family: var(--font-family-mono); }
.font-light { font-weight: var(--font-weight-light); }

/* Opacity */
.opacity-20 { opacity: 0.2; }
.opacity-50 { opacity: 0.5; }
.opacity-30 { opacity: 0.3; }
.opacity-10 { opacity: 0.1; }

/* Grayscale */
.grayscale { filter: grayscale(100%); }

/* Z-index */
.z-10 { z-index: 10; }

/* Backdrop blur */
.backdrop-blur { backdrop-filter: blur(8px); }
.backdrop-blur-md { backdrop-filter: blur(12px); }

/* Scroll margin */
.scroll-mt-24 { scroll-margin-top: var(--spacing-24); }

/* Grid and flex */
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.gap-6 { gap: var(--spacing-6); }
.gap-8 { gap: var(--spacing-8); }
.gap-12 { gap: var(--spacing-12); }

/* Transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: var(--transition-standard);
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: var(--transition-standard);
}
.duration-300 { transition-duration: var(--transition-short); }

/* Transformations */
.transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.-translate-y-1 { --tw-translate-y: -0.25rem; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }

/* Overflow */
.overflow-hidden { overflow: hidden; }
.overflow-x-auto { overflow-x: auto; }
.overflow-y-auto { overflow-y: auto; }

/* Max widths */
.max-w-5xl { max-width: var(--layout-max-width-5xl); }
.max-w-7xl { max-width: var(--layout-max-width-7xl); }
.max-w-2xl { max-width: var(--layout-max-width-2xl); }
.max-w-3xl { max-width: var(--layout-max-width-3xl); }
.max-w-4xl { max-width: var(--layout-max-width-4xl); }

/* Line height */
.leading-none { line-height: var(--line-height-none); }
.leading-relaxed { line-height: var(--line-height-relaxed); }

/* Display and positioning */
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-items-center { justify-items: center; }

.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.top-0 { top: 0px; }
.left-0 { left: 0px; }
.right-0 { right: 0px; }
.bottom-0 { bottom: 0px; }
.inset-0 { top: 0px; right: 0px; bottom: 0px; left: 0px; }

/* Other utilities */
.pointer-events-none { pointer-events: none; }
.z-50 { z-index: 50; }
.whitespace-pre-wrap { white-space: pre-wrap; }
.break-all { word-break: break-all; }
.line-through { text-decoration-line: line-through; }
.decoration-slate-700 { text-decoration-color: var(--color-slate-700); }
.tracking-tight { letter-spacing: -0.025em; }
.tracking-tighter { letter-spacing: -0.05em; }
.tracking-wider { letter-spacing: 0.05em; }
.uppercase { text-transform: uppercase; }
.underline { text-decoration-line: underline; }

/* Group hover effects */
.group:hover .group-hover\\:text-cyan-400 { color: var(--color-primary-400); }
.group:hover .group-hover\\:text-cyan-500\\/5 { color: rgba(14, 165, 233, 0.05); }

/* Table styles */
.border-collapse { border-collapse: collapse; }

/* Background image */
.bg-\\[radial-gradient\\(circle_at_50\\%_50\\%\\,rgba\\(14\\,165\\,233\\,0\\.1\\)\\,transparent_70\\%\\)\\] {
  background-image: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1), transparent 70%);
}

/* List styles */
.list-disc { list-style-type: disc; }
.list-inside { list-style-position: inside; }

/* Flexbox */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.grid { display: grid; }
.hidden { display: none; }
.md\\:flex { display: flex; }
.md\\:hidden { display: none; }
.sm\\:flex-row { display: flex; }
.sm\\:flex-col { display: flex; flex-direction: column; }

/* Responsive */
.md\\:text-2xl { font-size: var(--font-size-2xl); }
.md\\:text-5xl { font-size: var(--font-size-5xl); }
.md\\:text-8xl { font-size: var(--font-size-8xl); }
.md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.sm\\:w-auto { width: auto; }
.md\\:flex-row { flex-direction: row; }
.md\\:flex-col { flex-direction: column; }
.md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(0px * var(--tw-space-y-reverse)); }

/* Custom styles for AInTandem */
body {
  font-family: var(--font-family-sans);
  background-color: var(--color-background-primary);
  color: var(--color-text-secondary);
}`;

  return css;
}