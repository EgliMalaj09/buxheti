import { FontTheme, Theme } from '@/theme/types';
import {
  ColorThemeValue,
  FontSizeThemeValue,
  FontWeightThemeValue,
  SpacingThemeValue,
} from '@/theme/value';
import { fonts } from './fonts';

const defaultFontTheme: FontTheme = {
    default: fonts.PlusJakartaSansRegular,
  };

export const theme: Theme = {
    color: ColorThemeValue,
    font: defaultFontTheme,
    fontSize: FontSizeThemeValue,
    fontWeight: FontWeightThemeValue,
    spacing: SpacingThemeValue,
};
