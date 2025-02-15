import React from 'react';
import { LanguageProvider } from './src/locales/LanguageContext';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import './i18.config';
import { AppText } from '@/components/core/AppText';
import {  ThemeProvider } from '@/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from '@/utils/responsive';

EStyleSheet.build({
  $rem: RFValue(16),
});

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles?.root}>
      <LanguageProvider>
        <ThemeProvider>
        <View>
          <AppText.Base>Egli</AppText.Base>
          <AppText.Title>Egli</AppText.Title>
        </View>
        </ThemeProvider>
      </LanguageProvider>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});


export default App;
