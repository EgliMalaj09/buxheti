import { theme as defaultTheme } from '@/theme/theme';
import { Theme } from '@/theme/types';
import { clean } from '@/utils/helper';
import React, { useMemo, ReactNode, useContext, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

interface ProvidedValue {
    theme: Theme;
    tabBarVisible?: boolean;
    setTabBarVisible?: (visible: boolean) => void;
    definedStyles?: Record<string, any>;
}

interface Props {
    children?: ReactNode;
}

export const ThemeContext = React.createContext<ProvidedValue>({
    theme: defaultTheme,
});

export const ThemeProvider: React.FC<Props> = React.memo(({ children }) => {
    const [tabBarVisible, setTabBarVisible] = useState<boolean>(true);

    const definedStyles = useMemo(() => {
        return EStyleSheet.create({
            relative: { position: 'relative' },
            flex: { flex: 1 },
            flexGrow: { flexGrow: 1 },
            flexRow: { flexDirection: 'row' },
            flexColumn: { flexDirection: 'column' },
            flexAlignCenter: { alignItems: 'center' },
            flexAlignEnd: { alignItems: 'flex-end' },
            flexJustifyCenter: { justifyContent: 'center' },
            flexJustifyBetween: { justifyContent: 'space-between' },
            flexJustifyEvenly: { justifyContent: 'space-evenly' },
            bgWhite: { backgroundColor: defaultTheme?.color?.white },
            ...Object.keys(defaultTheme?.spacing).reduce((acc, key) => {
                const spacingValue = defaultTheme?.spacing?.[key];
                const _key = key.replace('.', '').trim();
                return {
                    ...acc,
                    [`w${_key}`]: { width: spacingValue },
                    [`minw${_key}`]: { minWidth: spacingValue },
                    [`maxw${_key}`]: { maxWidth: spacingValue },
                    [`h${_key}`]: { height: spacingValue },
                    [`minh${_key}`]: { minHeight: spacingValue },
                    [`maxh${_key}`]: { maxHeight: spacingValue },
                    'mauto': { margin: 'auto' },
                    [`m${_key}`]: { margin: spacingValue },
                    [`mb${_key}`]: { marginBottom: spacingValue },
                    [`mt${_key}`]: { marginTop: spacingValue },
                    [`ml${_key}`]: { marginLeft: spacingValue },
                    [`mr${_key}`]: { marginRight: spacingValue },
                    [`mx${_key}`]: { marginHorizontal: spacingValue },
                    [`my${_key}`]: { marginVertical: spacingValue },
                    'pauto': { padding: 'auto' },
                    [`p${_key}`]: { padding: spacingValue },
                    [`pb${_key}`]: { paddingBottom: spacingValue },
                    [`pt${_key}`]: { paddingTop: spacingValue },
                    [`pl${_key}`]: { paddingLeft: spacingValue },
                    [`pr${_key}`]: { paddingRight: spacingValue },
                    [`px${_key}`]: { paddingHorizontal: spacingValue },
                    [`py${_key}`]: { paddingVertical: spacingValue },
                };
            }, {}),
        });
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme: defaultTheme,
                definedStyles,
                tabBarVisible,
                setTabBarVisible,
            }}>
            {children}
        </ThemeContext.Provider>
    );
});

// Custom hook to use the theme context
export const useTheme = (): ProvidedValue => useContext(ThemeContext);

// Custom hook to apply themed styles with optional custom styles
export const useThemedStyle = (fn?: (props: any) => any, props: any = {}) => {
    const { theme, definedStyles } = useTheme();
    const _theme: Theme = props?.theme || theme;

    return useMemo(() => ({
        theme: _theme,
        ...(fn ? fn({ theme: _theme, ...clean(props) }) : {}),
        ...definedStyles,
    }), [_theme, fn, props, definedStyles]);
};
