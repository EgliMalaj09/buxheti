import { ComponentSizeAllowed } from '@/theme/enums';
import { SpacingValue } from '@/theme/types';
import { InputSizeTheme } from './inputSizeTheme';

export interface InputTheme {
  borderWidth: SpacingValue;
  borderRadius: SpacingValue;
  colors: {
    placeholder: string;
    text: string;
    background: string;
    border: {
      default: string;
      focus: string;
      error: string;
    };
  };
  sizes: Record<ComponentSizeAllowed, InputSizeTheme>;
}