import { useThemedStyle } from "@/theme";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { AppText } from "../AppText";
import createStyles from "./styles";

type Props = {
    error: string;
    style?: StyleProp<TextStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
};

export const InputError = (props: Props) => {
    const { error, style: styleInProp, wrapperStyle: wrapperStyleInProp } = props;
    const styles = useThemedStyle(createStyles);

    return (
        <View style={[styles?.errorRow, wrapperStyleInProp]} >
            {typeof error === 'string' ? (
                <AppText.Error style={styleInProp}>{error}</AppText.Error>
            ) : (
                error
            )}
        </View>
    )
}