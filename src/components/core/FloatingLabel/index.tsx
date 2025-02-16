import { ComponentSize, useThemedStyle } from "@/theme";
import { memo, useMemo } from "react";
import createStyles, { FLOATING_LABEL_HEIGHT } from "./styles";
import { View } from "react-native";
import Animated, { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export interface PlaceholderLabelProps {
    label: string;
    isFocused?: boolean;
    isFilled?: boolean;
    animationDuration?: number;
    isFloating?: boolean;
    style?: any;
    size?: ComponentSize;
    hideLabelOnSelection?: boolean;
}

export const FloatingLabel: React.ExoticComponent<PlaceholderLabelProps> = memo(
    ({
        label,
        isFilled,
        isFocused,
        animationDuration = 200,
        isFloating,
        size = ComponentSize.MEDIUM,
        style: stylesProps,
        hideLabelOnSelection,
    }) => {
        const styles = useThemedStyle(createStyles, { size });
        const isLabelToTop = isFocused || isFilled || !isFloating;

        const fontSizeAnimated = useMemo<number>(
            () => (isLabelToTop ? 13 : styles.input.fontSize),
            [isLabelToTop],
        );

        const opacityAnimated = useMemo<number>(
            () => (isLabelToTop ? (hideLabelOnSelection ? 0 : 0.7) : 1),
            [isLabelToTop],
        );

        const transformAnimated = useMemo<number>(
            () => (isLabelToTop ? 0 : styles.input.height / 2 - FLOATING_LABEL_HEIGHT / 2),
            [isLabelToTop],
        );

        const labelAnimatedStyle = useAnimatedStyle(() => ({
            fontSize: withTiming(fontSizeAnimated, {
                duration: animationDuration,
                easing: Easing.in(Easing.ease),
            }),
            opacity: withTiming(opacityAnimated, {
                duration: animationDuration,
                easing: Easing.in(Easing.ease),
            }),

            transform: [
                {
                    translateY: withTiming(transformAnimated, {
                        duration: animationDuration,
                        easing: Easing.in(Easing.ease),
                    }),
                },
            ],
        }));

        return (
            <View style={[styles.root, stylesProps]}>
                <Animated.Text style={[styles.label, labelAnimatedStyle]}>{label}</Animated.Text>
            </View>)
    });
