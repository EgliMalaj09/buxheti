import React from 'react';
import { LanguageProvider } from './src/locales/LanguageContext';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './i18.config';
import { ThemeProvider } from '@/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RFValue } from '@/utils/responsive';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '@/navigation/mainNavigation';

EStyleSheet.build({
  $rem: RFValue(16),
});

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={styles?.root}>
      <SafeAreaView style={styles?.root}>
        <LanguageProvider>
          <ThemeProvider>
            <NavigationContainer>
              <MainNavigation />
            </NavigationContainer>
          </ThemeProvider>
        </LanguageProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});


export default App;
