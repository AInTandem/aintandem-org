import { theme } from './theme';

// Utility functions to get theme values
export const getColor = (path: string): string => {
  const keys = path.split('.');
  let result: any = theme.colors;
  
  for (const key of keys) {
    result = result[key];
    if (result === undefined) {
      throw new Error(`Color path "${path}" not found in theme`);
    }
  }
  
  return result;
};

export const getFontSize = (size: string): string => {
  const fontSize = theme.typography.fontSize[size as keyof typeof theme.typography.fontSize];
  if (!fontSize) {
    throw new Error(`Font size "${size}" not found in theme`);
  }
  return fontSize;
};

export const getSpacing = (spacing: string): string => {
  const sp = theme.spacing[spacing as keyof typeof theme.spacing];
  if (!sp) {
    throw new Error(`Spacing "${spacing}" not found in theme`);
  }
  return sp;
};

export const getBorderRadius = (radius: string): string => {
  const br = theme.borderRadius[radius as keyof typeof theme.borderRadius];
  if (!br) {
    throw new Error(`Border radius "${radius}" not found in theme`);
  }
  return br;
};

export const getShadow = (shadow: string): string => {
  const sh = theme.boxShadow[shadow as keyof typeof theme.boxShadow];
  if (!sh) {
    throw new Error(`Shadow "${shadow}" not found in theme`);
  }
  return sh;
};

// CSS variable generator for Tailwind
export const generateCSSVariables = (): string => {
  let css = ':root {\n';
  
  // Flatten colors
  const flattenColors = (obj: any, prefix: string = ''): Record<string, string> => {
    let flattened: Record<string, string> = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'string') {
        flattened[newKey] = value;
      } else if (typeof value === 'object') {
        flattened = { ...flattened, ...flattenColors(value, newKey) };
      }
    }
    
    return flattened;
  };
  
  const flatColors = flattenColors(theme.colors);
  for (const [key, value] of Object.entries(flatColors)) {
    css += `  --color-${key}: ${value};\n`;
  }
  
  css += '}\n';
  return css;
};

// Export theme object
export { theme };