import { SpacingValue } from '@/theme/types/spacingTheme';

export interface InputSizeTheme {
  height: SpacingValue;
  width?: SpacingValue;
  fontSize: SpacingValue;
  padding?: {
    vertical?: SpacingValue;
    horizontal?: SpacingValue;
  };
}