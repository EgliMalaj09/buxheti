
import { AppText } from '@/components/core/AppText';
import { Container } from '@/components/core/Container';
import { Header } from '@/components/core/Header';
import { useLocale } from '@/locales/LanguageContext';
import React from 'react';
import { View } from 'react-native';

export const HomeScreen: React.FC = () => {
    const { t } = useLocale();
    return (
        <Container header={() => <Header title={t('home')} />}>
            <View style={{ flex: 1 }} >
                <AppText.Base>Home Screen</AppText.Base>
            </View>
        </Container>
    );
};
