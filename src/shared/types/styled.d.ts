import 'styled-components';
import { Theme } from '@shared/utils/themes/theme';
import type { ResponsiveTheme } from '@shared/hooks/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ResponsiveTheme, Theme {}
}
