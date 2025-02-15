import React from 'react';
import { LanguageProvider } from './src/locales/LanguageContext';
import { SafeAreaView, Text, View } from 'react-native';
import './i18.config';

function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: 'red'}}>
      <LanguageProvider>
        <View>
          <Text>Egli</Text>
        </View>
      </LanguageProvider>
      </SafeAreaView>
  );
}



export default App;
