
import { AppText, Container, Header } from '@/components/core';
import { useLocale } from '@/locales/LanguageContext';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { FormItem } from '@/components/core/FormItem';
import { InputText } from '@/components/core/InputText';


export const HomeScreen: React.FC = () => {
    const { t } = useLocale();
    const formikRef = React.useRef<FormikProps<any>>(null);

    return (
        <Container header={() => <Header title={t('home')} />}>
            <View style={{ flex: 1 }} >
            </View>
        </Container>
    );
};
