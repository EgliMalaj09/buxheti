import { FontWeightAllowed } from '@/theme/enums';

export type FontWeightTheme = {
  [key in FontWeightAllowed]: {
    fontFamily?: string;
    fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
      | undefined;
  };
};
