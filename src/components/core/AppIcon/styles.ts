import { theme as defaultTheme } from '@/theme';
import { SpacingValue, Theme } from '@/theme/types';
import EStyleSheet from 'react-native-extended-stylesheet';

export type AppIconStylesProps = {
    theme?: Theme;
    color?: string;
    width?: SpacingValue;
    height?: SpacingValue;
};

export const createStyles = ({
    theme = defaultTheme,
    color,
    width: _width,
    height: _height,
}: AppIconStylesProps) => {

    const width = _width || theme?.spacing?.[5];
    const height = _height || theme?.spacing?.[5];
    return {
        icon: {
            width: EStyleSheet.value(width),
            height: EStyleSheet.value(height),
            color: color,
        },
    };
};
