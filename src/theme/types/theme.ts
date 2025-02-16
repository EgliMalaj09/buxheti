import {
  ColorTheme,
  FontSizeTheme,
  FontTheme,
  FontWeightTheme,
  InputTheme,
  SpacingTheme,
} from '@/theme/types';
import { InputSizeTheme } from './inputSizeTheme';

export interface Theme {
  color: ColorTheme;
  spacing: SpacingTheme;
  font: FontTheme;
  fontSize: FontSizeTheme;
  fontWeight: FontWeightTheme;
  input: InputTheme
}
