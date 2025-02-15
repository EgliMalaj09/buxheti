import React from 'react';
import { LanguageProvider } from './src/locales/LanguageContext';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import './i18.config';

function App(): React.JSX.Element {


  return (
    <SafeAreaView style={styles?.root}>
      <LanguageProvider>
        <View />
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
