import * as IconSets from '@/assets/icons';
import { AppIcon } from '@/components/core/AppIcon';
import { useThemedStyle } from '@/theme';
import React from 'react';
import {
    NativeSyntheticEvent,
    StyleProp,
    TextInput,
    TextInputChangeEventData,
    TextInputProps,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { createStyles, StylesProps } from './styles';

export interface InputTextProps
    extends TextInputProps,
    React.RefAttributes<TextInput>,
    StylesProps {
    onChange?: (value: any) => void;

    wrapperStyle?: StyleProp<ViewStyle>;
    onNativeChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    style?: any;

    checkText?: (previous: string, next: string) => boolean;
    onChangeText?: (text: string, rawText?: string) => void;
    refInput?: (ref: any) => void;
    customTextInput?: any;
    customTextInputProps?: Object;
    includeRawValueInChangeText?: boolean;
    editable?: boolean;
    pattern?: RegExp;
    preLabel?: string;
}

export const InputText: React.ExoticComponent<InputTextProps> = React.memo(
    React.forwardRef(
        (
            {
                onChange,
                onNativeChange,
                wrapperStyle,
                style: styleProps,
                value,
                editable,
                pattern,
                preLabel,
                ...props
            },
            ref,
        ) => {
            const styles = useThemedStyle(createStyles, props);
            return (
                <View
                    style={[styles.root, wrapperStyle, { justifyContent: 'center', alignItems: 'center' }]}>
                    {!!preLabel && (
                        <TextInput editable={false} value={preLabel} style={[styles.input, styles?.preLabel]} />
                    )}

                    {
                        // @ts-ignore
                        React.createElement(props?.type ? TextInputMask : TextInput, {
                            autoCapitalize: props?.autoCapitalize || 'none',
                            underlineColorAndroid: 'transparent',
                            style: [styles.input, styleProps, preLabel ? { paddingLeft: 3 } : {}],
                            onChangeText: (val: string, rawText?: string) =>
                                pattern
                                    ? onChange?.((rawText || val).replace(pattern, '') || '')
                                    : onChange?.(rawText || val),
                            placeholderTextColor: styles?.placeholder?.color,
                            value: value?.toString() || '',
                            onChange: onNativeChange,
                            editable: editable,
                            ref,
                            ...props,
                        })
                    }

                </View>
            );
        },
    ),
);
