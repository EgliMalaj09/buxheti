import {
  theme as defaultTheme,
  FontSize,
  FontSizeAllowed,
  FontWeight,
  FontWeightAllowed,
} from '@/theme';
import { Theme } from '@/theme/types';
import EStyleSheet from 'react-native-extended-stylesheet';

export type AppTextStylesProps = {
  theme?: Theme;
  color?: string;
  size?: FontSizeAllowed;
  weight?: FontWeightAllowed;
  underline?: boolean;
  center?: boolean;
};
export const createStyles = ({
  theme = defaultTheme,
  size = FontSize.MEDIUM,
  color,
  underline = false,
  center,
  weight = FontWeight.REGULAR,
}: AppTextStylesProps) => {
  return EStyleSheet.create({
    text: {
      ...(underline && {
        textDecorationLine: 'underline',
      }),
      fontFamily: theme.font.default,
      color: color,
      fontSize: theme.fontSize[size],
      ...(theme?.fontWeight?.[weight] || {}),
      ...(center && {
        textAlign: 'center',
      }),
    },
  });
};
