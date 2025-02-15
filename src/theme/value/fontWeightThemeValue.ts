import { FontWeight } from '@/theme/enums';
import { FontWeightTheme } from '../types/fontWeightTheme';
import { fonts } from '@/theme/fonts';

export const FontWeightThemeValue: FontWeightTheme = {
  [FontWeight.REGULAR]: {
    fontFamily: fonts.PlusJakartaSansRegular,
  },
  [FontWeight.MEDIUM]: {
    fontFamily: fonts.PlusJakartaSansMedium,
  },
  [FontWeight.SEMIBOLD]: {
    fontFamily: fonts.PlusJakartaSansSemiBold,
  },
  [FontWeight.BOLD]: {
    fontFamily: fonts.PlusJakartaSansBold,
  },
};
