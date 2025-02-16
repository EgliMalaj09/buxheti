import { ComponentSize, ComponentSizeAllowed, theme as defaultTheme } from '@/theme';
import { Theme } from '@/theme/types';
import EStyleSheet from 'react-native-extended-stylesheet';

type StylesProps = {
    theme?: Theme;
    isError?: boolean;
    isFocus?: boolean;
    noStyle?: boolean;
    size: ComponentSizeAllowed
    wrapperStyle?: any;
};

const createStyles = ({
    theme = defaultTheme,
    isError,
    size,
    isFocus,
    noStyle,
    wrapperStyle,
}: StylesProps) => {
    const inputStyleForSize = theme?.input?.sizes?.[size];
    console.log("is focus in style", isFocus);

    return EStyleSheet.create({
        wrapper: noStyle
            ? {
                ...wrapperStyle,
            }
            : {
                marginBottom: theme.spacing?.[4],
                ...wrapperStyle,
            },
        input: !noStyle && {
            height: inputStyleForSize?.height,
            padding: inputStyleForSize?.padding?.horizontal,
        },
        main: noStyle
            ? {}
            : {
                flex: 1,
            },
        root: noStyle
            ? {}
            : {
                overflow: 'hidden',
                zIndex: 1,
                minWidth: 100,
                flexDirection: 'row',
                position: 'relative',
                height: inputStyleForSize?.height,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: theme?.input?.borderRadius,
                borderWidth: theme?.input?.borderWidth,
                backgroundColor: theme?.input?.colors?.background,
                borderColor: isError
                    ? theme?.input?.colors?.border?.error
                    : isFocus
                        ? theme?.input?.colors?.border?.focus
                        : theme?.input?.colors?.border?.default,
            },
    });
};

export default createStyles;
