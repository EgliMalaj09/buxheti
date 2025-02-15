// @ts-nocheck
import { FontSize, FontWeight,  useThemedStyle } from '@/theme';
import { omit } from 'lodash';
import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { AppTextStylesProps, createStyles } from './styles';

export type AppTextProps = TextProps &
  AppTextStylesProps & {
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
  };
declare const AppTextType: React.ExoticComponent<AppTextProps> | React.FC<AppTextProps>;

const BaseText: typeof AppTextType = React.memo(({ style: styleInProp, children, ...rest }) => {
  const styles = useThemedStyle(createStyles, rest);
  return (
    <Text
      style={[styles.text, styleInProp]}
      {...omit(rest, ['theme', 'size', 'weight', 'mode', 'right'])}>
      {children}
    </Text>
  );
});

const _AppText = {
  weight: FontWeight,
  size: FontSize,
};
_AppText.Base = ({ children, ...props }: AppTextProps) => (
  <BaseText size={FontSize.MEDIUM} weight={FontWeight.REGULAR} {...props}>
    {children}
  </BaseText>
);

_AppText.Title = ({ children, ...props }: AppTextProps) => (
  <BaseText size={FontSize.XXXLARGE} weight={FontWeight.BOLD} {...props}>
    {children}
  </BaseText>
);


export const AppText: {
  Base: typeof AppTextType;
  Title: typeof AppTextType;
  weight: typeof FontWeight;
  size: typeof FontSize;
} = _AppText;
