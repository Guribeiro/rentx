import { Palette } from './theme';

export const light: Palette = {
  title: 'light',
  fonts: {
    light: 'Archivo_300Light',
    regular: 'Archivo_400Regular',
    medium: 'Archivo_500Medium',
    bold: 'Archivo_700Bold',
  },
  colors: {
    primary: '#1B1B1F',
    secondary: '#29292E',
    texts: {
      light: '#AEAEB3',
      medium: '#7A7A80',
      strong: '#47474D',
    },
    shapes: {
      light: '#FFFFFF',
      strong: '#F4F5F6',
    },
    green: '#03B252',
    red: '#DC1637',
    white: '#FFFFFF',
  },
} as const;

export type LightThemeType = typeof light;
