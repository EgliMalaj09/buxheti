
import { createContext, memo, useMemo } from 'react';
import { theme as defaultTheme } from '@/theme/theme';
import { Theme } from '@/theme/types';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { clean } from '@/utils/helper';

interface ThemeProviderProps {
    children: React.ReactNode;
}
interface ProvidedValue {
    theme: Theme;
    tabBarVisible?: boolean;
    setTabBarVisible?: (visible: boolean) => void;
    definedStyles?: any;
}
export const ThemeContext = createContext<ProvidedValue>({
    theme: defaultTheme,
});

export const ThemeProvider = memo<ThemeProviderProps>(
    (props) => {
        const definedStyles = useMemo(() => EStyleSheet.create({
            relative: {
                position: 'relative',
            },
            flex: {
                flex: 1,
            },
            flexGrow: {
                flexGrow: 1,
            },
            flexRow: {
                flexDirection: 'row',
            },
            flexColumn: {
                flexDirection: 'column',
            },
            flexAlignCenter: {
                alignItems: 'center',
            },
            flexAlignStart: {
                alignItems: 'flex-start',
            },
            flexAlignEnd: {
                alignItems: 'flex-end',
            },
            flexJustifyCenter: {
                justifyContent: 'center',
            },
            flexJustifyBetween: {
                justifyContent: 'space-between',
            },
            flexJustifyEvenly: {
                justifyContent: 'space-evenly',
            },
            flexJustifyStart: {
                justifyContent: 'flex-start',
            },
            textAlignCenter: {
                textAlign: 'center',
            },
            bgWhite: {
                backgroundColor: defaultTheme?.color?.white,
            },
            ...Object.keys(defaultTheme?.spacing).reduce((acc, key) => {
                // @ts-ignore
                const spacingValue = defaultTheme?.spacing?.[key];
                const _key = key.replace('.', '').trim();
                return {
                    ...acc,
                    // width & height
                    [`w${_key}`]: { width: spacingValue },
                    [`minw${_key}`]: { minWidth: spacingValue },
                    [`maxw${_key}`]: { maxWidth: spacingValue },
                    [`h${_key}`]: { height: spacingValue },
                    [`minh${_key}`]: { minHeight: spacingValue },
                    [`maxh${_key}`]: { maxHeight: spacingValue },
                    // margin
                    ['mauto']: { margin: 'auto' },
                    [`m${_key}`]: { margin: spacingValue },
                    [`mb${_key}`]: { marginBottom: spacingValue },
                    [`mt${_key}`]: { marginTop: spacingValue },
                    [`ml${_key}`]: { marginLeft: spacingValue },
                    [`mr${_key}`]: { marginRight: spacingValue },
                    [`mx${_key}`]: { marginHorizontal: spacingValue },
                    [`my${_key}`]: { marginVertical: spacingValue },

                    // padding
                    ['pauto']: { padding: 'auto' },
                    [`p${_key}`]: { padding: spacingValue },
                    [`pb${_key}`]: { paddingBottom: spacingValue },
                    [`pt${_key}`]: { paddingTop: spacingValue },
                    [`pl${_key}`]: { paddingLeft: spacingValue },
                    [`pr${_key}`]: { paddingRight: spacingValue },
                    [`px${_key}`]: { paddingHorizontal: spacingValue },
                    [`py${_key}`]: { paddingVertical: spacingValue },
                };
            }, {}),
        }), []);
        return (
            <ThemeContext.Provider
                value={{
                    theme: defaultTheme,
                    definedStyles: definedStyles,
                }}>
                {props.children}
            </ThemeContext.Provider>
        );
    }
);

export const useTheme = () => React.useContext(ThemeContext);

export const useThemedStyle = (fn?: (props: any) => any, props: any = {}) => {
    const { theme, definedStyles } = useTheme();
    const innerTheme = props?.theme || theme;
    return useMemo(() => ({
        theme: innerTheme,
        ...(fn &&
            fn({
                theme: innerTheme,
                ...clean(props),
            })),
        ...definedStyles,
    }), [innerTheme, fn, props, definedStyles]);
};
