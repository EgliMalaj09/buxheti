
import { AppIcon } from '@/components/core/AppIcon';
import { useThemedStyle } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { AppText } from '../AppText';
import { isNavigationAvailable, resetScreens } from '@/utils/helper';
import { ChevronLeft } from '@/assets/icons';
import { createStyles, HeaderStylesProps } from './styles';

export interface HeaderProps extends HeaderStylesProps {
    children?: React.ReactNode;
    title?: string;
    left?: (props?: any) => React.ReactNode;
    right?: (props?: any) => React.ReactNode;
    hideRight?: boolean;
    hideLeft?: boolean;
    backable?: boolean;
    onBack?: () => void;
    style?: StyleProp<ViewStyle>;
    titleProps?: any;
}

export const Header: React.FC<HeaderProps> = ({
    children,
    title,
    right,
    left,
    backable = false,
    hideLeft = false,
    hideRight = false,
    style,
    onBack,
    titleProps,
    ...props
}) => {
    const navigation = isNavigationAvailable() ? useNavigation() : undefined;

    const handleBack = useCallback(() => {
        if (onBack) {
            onBack();
        } else {
            navigation?.canGoBack()
                ? navigation.goBack()
                : resetScreens(navigation);
        }
    }, [backable, onBack]);
    const styles = useThemedStyle(createStyles, props);

    return (
        <View style={[styles.header, style]}>
            {!hideLeft && (
                <View style={styles.left}>
                    {backable && (
                        <TouchableOpacity onPress={handleBack} style={styles?.touchable}>
                            <AppIcon icon={ChevronLeft} />
                        </TouchableOpacity>
                    )}
                    {left && left(props)}
                </View>
            )}
            {!children && title && (
                <AppText.PageTitle style={styles?.title} {...titleProps}>
                    {title}
                </AppText.PageTitle>
            )}
            {children && children}
            {!hideRight && <View style={styles.right}>{right && right(props)}</View>}
        </View>
    );
};
