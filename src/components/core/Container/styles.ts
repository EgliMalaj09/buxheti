import { theme as defaultTheme,  } from '@/theme';
import { Theme } from '@/theme/types';
import EStyleSheet from 'react-native-extended-stylesheet';

export type ContainerStyleProps = {
    theme?: Theme;
    center?: boolean;
    wrapperStyle?: any;
    contentWrapperStyle?: any;
    bodyStyle?: any;
    enableBottomMargin?: boolean;
    noHeaderPadding?: boolean;
    noContentPadding?: boolean;
    extraWithoutContent?: boolean;
}

export const createStyles = ({
    theme = defaultTheme,
    center = false,
    noContentPadding = false,
    wrapperStyle,
    contentWrapperStyle,
    bodyStyle,
    enableBottomMargin,
    extraWithoutContent,
    noHeaderPadding,

}: ContainerStyleProps) => {
    return EStyleSheet.create({
        rootWrapper: {
            flex: 1,
            ...wrapperStyle
        },
        row: {
            flex: 1,
            flexDirection: 'column',
        },
        body: {
            flexDirection: 'column',
            flex: 1,
            ...bodyStyle,
        },
        contentContainerStyle: {
            flexDirection: 'column',
            flexGrow: 1,
        },
        header: {
            paddingHorizontal: noHeaderPadding ? 0 : theme?.spacing?.[5],
        },
        contentWrapper: {
            flex: 1,
            marginBottom: enableBottomMargin ? theme.spacing?.[13] : 0,
            ...contentWrapperStyle,
        },
        content: {
            ...(!extraWithoutContent
                ? {
                    flex: 1,
                }
                : {}),
            justifyContent: center ? 'center' : 'flex-start',
            flexDirection: 'column',
            paddingHorizontal: noContentPadding ? 0 : theme?.spacing?.[5],
        },

    })
}