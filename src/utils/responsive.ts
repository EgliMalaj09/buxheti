import { Dimensions, Platform, StatusBar } from 'react-native';

export const RFPercentage = (percent: number): number => {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - (offset as number) : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

// iphone 14 device screen is width: 844 height: 390 for standard
export function RFValue(fontSize: number, standardScreenWidth: number = 390): number {
  const { width } = Dimensions.get('window');
  return Math.round((width * fontSize) / standardScreenWidth);
}
