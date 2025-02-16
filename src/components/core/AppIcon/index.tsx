import { useThemedStyle } from '@/theme';
import { omit } from 'lodash';
import React, { memo } from 'react';
import { SvgProps } from 'react-native-svg';
import { AppIconStylesProps, createStyles } from './styles';

export interface AppIconProps extends AppIconStylesProps {
    icon: React.FC<SvgProps>;
    style?: any;
}

export const AppIcon: React.ExoticComponent<AppIconProps> = memo(({ icon: Icon, ...props }) => {
    const styles = useThemedStyle(createStyles, props);

    return <Icon {...styles?.icon} {...omit(props, ['width', 'height'])} />;
});
