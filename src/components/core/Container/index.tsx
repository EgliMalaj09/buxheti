import React, { memo, useCallback } from "react";
import { SafeAreaView, ScrollView, StyleProp, View } from "react-native";
import { useThemedStyle } from "@/theme";
import { ContainerStyleProps, createStyles } from "./styles";

interface ContainerProps extends ContainerStyleProps {
    children: React.ReactNode;
    header?: () => React.ReactNode;
    scrollable?: boolean;
    style?: StyleProp<View>;
    bodyStyle?: StyleProp<View>;
    enableBottomMargin?: boolean;
}

export const Container: React.FC<ContainerProps> = memo(({
    scrollable = false,
    children,
    header,
    enableBottomMargin = false,
    ...props
}) => {
    const styles = useThemedStyle(createStyles, {
        enableBottomMargin, ...props
    })
    const renderHeader = useCallback(
        () => header && <View style={styles?.header}>{header()}</View>,
        [header, styles?.header],
    );

    const renderContent = useCallback(
        () => (
            <View style={styles?.contentWrapper}>
                <View style={styles?.content}>{children}</View>
            </View>
        ),
        [header, children, styles?.contentWrapper, styles?.content],
    );

    const renderWrapperComponent = useCallback(() => {
        if (scrollable) {
            return (
                <View style={styles?.body}>
                    {renderHeader()}
                    <ScrollView
                        alwaysBounceHorizontal={false}
                        alwaysBounceVertical={false}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles?.contentContainerStyle}
                    >
                        {renderContent()}
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={styles?.body}>
                    {renderHeader()}
                    {renderContent()}
                </View>
            )
        }
    }, [renderContent, renderHeader, scrollable, styles?.body, styles?.contentContainerStyle]);

    const renderSafeArea = useCallback(
        () => (
            <>
                <SafeAreaView style={styles?.row}>{renderWrapperComponent()}</SafeAreaView>
            </>
        ),
        [],
    );


    return (
        <View style={styles?.rootWrapper} >
            {renderSafeArea()}
        </View>
    );
})