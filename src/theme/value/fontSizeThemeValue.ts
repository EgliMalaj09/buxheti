import { FontSize } from '../enums';
import { SpacingThemeValue } from './spacingThemeValue';

export const FontSizeThemeValue = {
    [FontSize.DEFAULT]: SpacingThemeValue?.[3.5],
    [FontSize.XXSMALL]: SpacingThemeValue?.[2],
    [FontSize.XSMALL]: SpacingThemeValue?.[2.5],
    [FontSize.SMALL]: SpacingThemeValue?.[3],
    [FontSize.MEDIUM]: SpacingThemeValue?.[3.5],
    [FontSize.LARGE]: SpacingThemeValue?.[4],
    [FontSize.XLARGE]: SpacingThemeValue?.[4.5],
    [FontSize.XXLARGE]: SpacingThemeValue?.[6],
    [FontSize.XXXLARGE]: SpacingThemeValue?.[8],
};
