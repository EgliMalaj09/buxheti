import { Animated, TouchableOpacity, View } from "react-native";
import { AppIcon } from "../AppIcon";
import { QrButton } from "@/assets/icons";
import { theme, useThemedStyle } from "@/theme";
import { createStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "@/constants/screens";

const buttonRadius = 60;

const buttonConfig = [
    {
        screen: Screens.EXPENSE_ADD_MANUAL,
        translateX: -buttonRadius,
        translateY: -buttonRadius,
    },
    {
        screen: Screens.EXPENSE_SCAN_QR,
        translateX: buttonRadius,
        translateY: -buttonRadius,
    },
];

export const QrButtonComponent = ({
    showExtraButtons,
    animationValue,
}: {
    showExtraButtons: boolean;
    animationValue: Animated.Value;
}) => {
    const qrButtonStyles = useThemedStyle(createStyles);
    const navigation = useNavigation();

    const getExtraButtonStyle = (translateX: number, translateY: number) => {
        return {
            transform: [
                {
                    translateX: animationValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, translateX],
                    }),
                },
                {
                    translateY: animationValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, translateY],
                    }),
                },
            ],
        };
    };

    const handleExtraButtonPress = (screen: Screens) => {
        navigation.navigate(screen);
    };

    return (
        <View style={qrButtonStyles.qrContainer}>
            <View style={qrButtonStyles.iconContainer}>
                <AppIcon
                    icon={QrButton}
                    style={qrButtonStyles.icon}
                    width={theme?.spacing?.[15]}
                    height={theme?.spacing?.[15]}
                />
            </View>
            {showExtraButtons &&
                buttonConfig.map(({ screen, translateX, translateY }, index) => (
                    <Animated.View
                        key={index}
                        style={[qrButtonStyles.extraButton, getExtraButtonStyle(translateX, translateY)]}>
                        <TouchableOpacity onPress={() => handleExtraButtonPress(screen)}>
                            <AppIcon
                                icon={QrButton}
                                width={theme?.spacing?.[15]}
                                height={theme?.spacing?.[15]}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                ))}
        </View>
    );
};
