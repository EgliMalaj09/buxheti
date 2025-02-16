import * as colors from '@/theme/colors';
import { ComponentSize, FontSize } from '@/theme/enums';
import { InputTheme } from '@/theme/types';
import { ColorThemeValue } from '@/theme/value/colorThemeValue';
import { FontSizeThemeValue } from '@/theme/value/fontSizeThemeValue';
import { SpacingThemeValue } from '@/theme/value/spacingThemeValue';

export const InputThemeValue: InputTheme = {
    borderWidth: SpacingThemeValue?.px,
    borderRadius: SpacingThemeValue?.[2],
    colors: {
        placeholder: ColorThemeValue.textDefault,
        text: ColorThemeValue.textDefault,
        background: ColorThemeValue.white,
        border: {
            default: colors.gray.borderInput,
            focus: ColorThemeValue.primary,
            error: ColorThemeValue.error,
        },
    },
    sizes: {
        [ComponentSize.SMALL]: {
            height: SpacingThemeValue?.[10],
            fontSize: FontSizeThemeValue[FontSize.SMALL],
            padding: {
                vertical: SpacingThemeValue?.[0],
                horizontal: SpacingThemeValue?.[2],
            },
        },
        [ComponentSize.MEDIUM]: {
            height: SpacingThemeValue?.[14],
            fontSize: FontSizeThemeValue[FontSize.MEDIUM],
            padding: {
                vertical: SpacingThemeValue?.[0],
                horizontal: SpacingThemeValue?.[3.5],
            },
        },
        [ComponentSize.LARGE]: {
            height: SpacingThemeValue?.[16],
            fontSize: FontSizeThemeValue[FontSize.LARGE],
            padding: {
                vertical: SpacingThemeValue?.[0],
                horizontal: SpacingThemeValue?.[5],
            },
        },
    },
};