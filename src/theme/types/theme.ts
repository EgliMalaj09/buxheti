import {
    ColorTheme,
    FontSizeTheme,
    FontTheme,
    FontWeightTheme,
    SpacingTheme,
  } from '@/theme/types';

export interface Theme {
    color: ColorTheme;
    spacing: SpacingTheme;
    font: FontTheme;
    fontSize: FontSizeTheme;
    fontWeight: FontWeightTheme;
}
