import { theme as defaultTheme, Theme } from '@/theme';
import EStyleSheet from 'react-native-extended-stylesheet';


export type HeaderStylesProps = {
    theme?: Theme;
};

export const createStyles = ({ theme = defaultTheme }: HeaderStylesProps) => {
    return EStyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '100%',
            marginVertical: theme?.spacing?.[6],
        },
        left: {
            minWidth: theme?.spacing?.[12],
            flexDirection: 'row',
        },
        right: {
            minWidth: theme?.spacing?.[12],
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        title: {
            maxWidth: '90%',
        },
        touchable: {
            width: theme?.spacing?.[10],
        },
    })
}