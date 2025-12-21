# AInTandem Theme System

This project implements a maintainable theme system that extracts all styling elements into organized, reusable tokens with a single source of truth.

## Theme Structure

### 1. Color System
- **Primary**: Cyan (`#0ea5e9`) - Used for accents, buttons, highlights
- **Secondary**: Blue (`#3b82f6`) - Used for gradients
- **Neutral**: Slate-based palette from 50 to 950
- **Accents**: Green (`#10b981`) and Red (`#ef4444`) for special elements

### 2. Typography
- **Font Families**:
  - Sans: 'Inter' (main)
  - Mono: 'JetBrains Mono' (code/technical text)
- **Font Sizes**: From xs (0.75rem) to 8xl (6rem)
- **Font Weights**: From light (300) to black (900)

### 3. Spacing System
- Consistent spacing scale based on 0.25rem (4px) increments
- Padding and margin utilities from 0 to 96 (24rem)

### 4. Component Styling
- Consistent border radius (lg, xl, 2xl, 3xl)
- Shadow system with cyan-specific variants
- Transition timing functions

## Implementation

The theme is implemented through:

1. **Single Source of Truth** (`theme.js`): Organized theme object containing all design tokens
2. **CSS Generator** (`utils/themeGenerator.js`): Utility to generate CSS from the theme object
3. **Generated CSS** (`src/styles/theme.css`): Auto-generated CSS with variables and Tailwind class mappings
4. **Generation Script** (`generate-theme.js`): Script to run the CSS generation

## Files

- `theme.js`: Single source of truth for all design tokens
- `utils/themeGenerator.js`: Utility to generate CSS from theme object
- `src/styles/theme.css`: Auto-generated CSS file with theme variables and Tailwind mappings
- `generate-theme.js`: Script to generate CSS from theme
- `THEME.md`: This documentation file

## Usage

To update the theme:

1. Modify values in `theme.js`
2. Run `npm run generate-theme` (or `node generate-theme.js`) to regenerate the CSS
3. The updated styles will be available in the application

The generated `src/styles/theme.css` file is committed to the repository because:
- It's a required asset for the application to run properly
- It ensures consistency across all environments
- It avoids the need to generate CSS at runtime

The `prebuild` script ensures the CSS is regenerated before each build.

## When to Run the Generator

- After making changes to `theme.js`
- Before committing changes to ensure the CSS is up-to-date
- Automatically during the build process via the `prebuild` script
- In CI/CD pipelines to ensure consistency

The existing Tailwind classes continue to work as before, but now they reference the centralized theme values. This allows for consistent styling across the application and easy theme modifications.

## Benefits

1. **Maintainability**: Single source of truth for all design tokens
2. **Consistency**: Uniform application of colors, spacing, and typography
3. **Scalability**: Easy to update or modify the design system
4. **No Duplication**: Eliminates redundancy across multiple files
5. **Flexibility**: Works with existing Tailwind classes
6. **CSS Validity**: Properly formatted CSS variables that avoid syntax errors (e.g., `--spacing-1-dot-5` instead of `--spacing-1.5`)