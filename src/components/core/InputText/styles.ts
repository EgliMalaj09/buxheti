import {
    ComponentSize,
    ComponentSizeAllowed,
    theme as defaultTheme,
} from '@/theme';
import { Theme } from '@/theme/types';
import { hexToRgbA } from '@/utils/helper';
import { ColorValue } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export type StylesProps = {
    theme?: Theme;
    size?: ComponentSizeAllowed;
    placeholderTextColor?: ColorValue;
    isError?: boolean;
};

export const createStyles = ({
    theme = defaultTheme,
    size = ComponentSize.MEDIUM,
    placeholderTextColor,
}: StylesProps) => {
    const inputStyleForSize = theme?.input?.sizes?.[size];

    return EStyleSheet.create({
        root: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            flex: 1,
            fontFamily: theme.font.default,
            height: inputStyleForSize?.height,
            color: theme?.input?.colors?.text,
            fontSize: inputStyleForSize?.fontSize,
            paddingVertical: inputStyleForSize?.padding?.vertical,
            paddingHorizontal: inputStyleForSize?.padding?.horizontal,
            zIndex: 9,
        },
        placeholder: {
            fontFamily: theme.font.default,
            color: placeholderTextColor || theme?.input?.colors?.placeholder,
            fontSize: inputStyleForSize?.fontSize,
        },
        passwordVisibleButton: {
            padding: theme?.spacing?.[4],
            zIndex: 10,
        },
        passwordVisibleIcon: {
            color: hexToRgbA(theme?.input?.colors?.text, 0.5),
            fontSize: inputStyleForSize?.fontSize,
        },
        preLabel: {
            flex: 0,
            fontFamily: theme.font.default,
            fontSize: inputStyleForSize?.fontSize,
            height: '100%',
            paddingLeft: inputStyleForSize?.padding?.horizontal,
            paddingHorizontal: 0,
            zIndex: 9,
        },
    });
};
