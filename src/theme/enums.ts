import { valueof } from '@/utils/helper';

export enum FontSize {
    DEFAULT = 'default',
    XXSMALL = 'xxsmall',
    XSMALL = 'xsmall',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
    XXLARGE = 'xxlarge',
    XXXLARGE = 'xxxlarge',
}

export type FontSizeAllowed = FontSize | valueof<FontSize>;

export enum FontWeight {
    REGULAR = 'regular',
    MEDIUM = 'medium',
    SEMIBOLD = 'semibold',
    BOLD = 'bold',
}

export type FontWeightAllowed = FontWeight | valueof<FontWeight>;
