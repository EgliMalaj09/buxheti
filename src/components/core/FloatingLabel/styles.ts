import { ComponentSizeAllowed, theme as defaultTheme, } from '@/theme';
import { Theme } from '@/theme/types';
import EStyleSheet from 'react-native-extended-stylesheet';

type StylesProps = {
    theme?: Theme;
    size: ComponentSizeAllowed;
};
export const FLOATING_LABEL_HEIGHT = 30;

const createStyles = ({ theme = defaultTheme, size, }: StylesProps) => {
    const inputStyleForSize = theme?.input?.sizes?.[size];
    return EStyleSheet.create({
        input: {
            height: inputStyleForSize?.height,
            fontSize: inputStyleForSize?.fontSize,
        },
        root: {
            position: 'absolute',
            top: 0,
            zIndex: -1,
            justifyContent: 'center',
            minHeight: FLOATING_LABEL_HEIGHT,
        },
        label: {
            color: theme?.input?.colors?.placeholder,
            fontFamily: theme.font.default,
            ...theme?.fontWeight?.regular,
        },
    });
};

export default createStyles;
