import { AppText } from '@/components/core/AppText';
import { Screens } from '@/constants/screens';
import { useLocale } from '@/locales/LanguageContext';
import { HomeScreen } from '@/screens/home';
import { theme } from '@/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { memo } from 'react';
import React from 'react';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainNavigation = memo(() => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,

            }}
            initialRouteName={Screens.MAIN_TAB}>
            <Stack.Screen name={Screens.MAIN_TAB} component={HomeNavigation} />
        </Stack.Navigator>
    );
});

export const HomeNavigation = memo(() => {
    const { t } = useLocale();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={Screens.HOME}
                options={{
                    tabBarLabel: t('home'),
                }}
                component={HomeScreen} />

            <Tab.Screen
                name={Screens.SETTINGS}
                component={() => <View><AppText.Base>Setting</AppText.Base></View>}
                options={{
                    tabBarLabel: t('settings'),
                    tabBarIcon: (props => {
                        console.log("props", props);

                        return (
                            <View {...props}>
                                <AppText.Base>Setting</AppText.Base>
                            </View>
                        )
                    })
                }}
            />
        </Tab.Navigator>
    );
});

