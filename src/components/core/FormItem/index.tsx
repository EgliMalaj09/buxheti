import React, { FocusEventHandler, memo, useMemo, useState } from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import _, { isEmpty, isError } from 'lodash';
import { useFormikContext } from 'formik';
import { addPropsToChildren, getErrorMessage } from "@/utils/helper";
import { use } from "i18next";
import { ComponentSize, useThemedStyle } from "@/theme";
import createStyles from "./styles";
import { InputError } from "../InputError";
import { FloatingLabel } from "../FloatingLabel";
import { FLOATING_LABEL_HEIGHT } from "../FloatingLabel/styles";

export type FormItemProps = {
    children: React.ReactNode;
    label?: string;
    name?: string;
    floatingLabel?: boolean;
    noStyle?: boolean;
    errorStyle?: StyleProp<TextStyle>;
    errorWrapperStyle?: StyleProp<ViewStyle>;
    size?: ComponentSize;
    wrapperStyle?: StyleProp<ViewStyle>;
    append?: () => React.ReactNode;
    onChange?: (value: any) => any;
    hideErrorMessage?: boolean;
    labelStyle?: StyleProp<ViewStyle>;
    hideLabelOnSelection?: boolean;
}

export const FormItem: React.FC<FormItemProps> = memo(
    ({
        children,
        label,
        name,
        size = ComponentSize.MEDIUM,
        noStyle,
        errorStyle,
        hideErrorMessage = false,
        append,
        errorWrapperStyle,
        wrapperStyle,
        onChange,
        labelStyle,
        hideLabelOnSelection = false,
        ...props
    }) => {
        const [isFocused, setIsFocused] = useState(false);

        const formik = name && useFormikContext();

        const isTouched = useMemo(
            () => name && formik && formik?.touched && !!_.get(formik?.touched, name),
            [formik, name],
        );

        const isFilled = useMemo(() => {
            if (formik && name) {
                const tmpValue = _.get(formik?.values, name);
                const _value =
                    tmpValue && typeof tmpValue === 'object' ? Object.values(tmpValue)?.[0] : tmpValue;

                return !isEmpty(_value) || false;
            } else return false
        }, [formik, hideLabelOnSelection, name]);

        const error = useMemo(() => {
            if (formik && name) {
                const errorMessage = _.get(formik?.errors, name);
                const innerError = getErrorMessage(errorMessage, formik, name);
                return (isTouched && formik?.errors && innerError) || undefined;
            } else return undefined
        }, [formik, name]);

        const styles = useThemedStyle(createStyles, {
            noStyle,
            wrapperStyle,
            isError: !!error,
            isFocus: isFocused,
        });

        console.log("isfocused ne form item", isFocused);

        return (
            <View style={styles?.wrapper}>
                <View style={styles?.root}>
                    <View style={styles?.main}>
                        {
                            label && (
                                <FloatingLabel
                                    label={label}
                                    hideLabelOnSelection={hideLabelOnSelection}
                                    size={size}
                                    style={[{ paddingLeft: styles.input.padding }, labelStyle]}
                                    isFilled={isFilled}
                                    isFocused={isFocused}
                                    isFloating={props?.floatingLabel !== false}
                                />
                            )
                        }
                        {
                            addPropsToChildren(children, (child: any) => ({
                                ...props,
                                ...child?.props,
                                error,
                                onBlur: (event: FocusEventHandler) => {
                                    name && formik && formik?.setFieldTouched(name, true);
                                    name && formik && formik?.handleBlur(name)(event);
                                    child?.props?.onBlur?.(event);
                                    setIsFocused(false);
                                },
                                onFocus: () => {
                                    child?.props?.onFocus?.();
                                    setIsFocused(true);
                                },
                                onChange: async (value: any, shouldTouched: boolean = false) => {
                                    if (!onChange || (onChange && (await onChange(value)) !== false)) {
                                        if (shouldTouched) {
                                            name && formik && formik?.setFieldTouched(name, true);
                                        }
                                        name && formik && formik?.setFieldValue(name, value);
                                        child?.props?.onChange?.(value);
                                    }
                                },
                                ...(name ? {
                                    value: name && formik && _.get(formik?.values, name),
                                } : {}),
                                ...(!noStyle
                                    ? {
                                        style: {
                                            paddingTop: !noStyle && label ? FLOATING_LABEL_HEIGHT / 2 : undefined,
                                        }
                                    }
                                    : {}),
                                isFocused,
                                isFilled,
                                isError: !!error,
                            }))
                        }
                    </View>
                    {append && append()}
                </View>
                {!hideErrorMessage && error && (
                    <InputError style={errorStyle} wrapperStyle={errorWrapperStyle} error={error} />
                )}
            </View>
        )
    }
)