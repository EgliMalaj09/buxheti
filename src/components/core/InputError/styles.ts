import { theme as defaultTheme, Theme } from '@/theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const createStyles = ({ theme = defaultTheme }: { theme: Theme }) => {
    return EStyleSheet.create({
        errorRow: {
            flexDirection: 'row',
            marginTop: theme?.spacing?.[2.5],
        },
        error: {
            justifyContent: 'center',
        },
        iconError: {
            alignSelf: 'center',
            marginEnd: theme.spacing?.[1],
        },
    });
};

export default createStyles;