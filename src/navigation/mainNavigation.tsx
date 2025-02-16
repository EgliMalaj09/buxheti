import { Screens } from '@/constants/screens';
import { useLocale } from '@/locales/LanguageContext';
import { HomeScreen } from '@/screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useRef, memo } from 'react';
import { View, Animated, TouchableWithoutFeedback } from 'react-native';
import { EventArg } from '@react-navigation/native';
import { AppText, QrButtonComponent } from '@/components/core';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainNavigation = memo(() => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Screens.MAIN_TAB}>
        <Stack.Screen name={Screens.MAIN_TAB} component={HomeNavigation} />
        <Stack.Screen name={Screens.EXPENSE_ADD_MANUAL} component={ExpenseAddManualScreen} />
        <Stack.Screen name={Screens.EXPENSE_SCAN_QR} component={ExpenseScanQRScreen} />
    </Stack.Navigator>
));

export const HomeNavigation = memo(() => {
    const { t } = useLocale();
    const [showExtraButtons, setShowExtraButtons] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current;

    const animateExtraButtons = () => {
        Animated.timing(animationValue, {
            toValue: showExtraButtons ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setShowExtraButtons(!showExtraButtons);
    };

    const handleTabPress = (e: EventArg<"tabPress", true, undefined>) => {
        e.preventDefault();
        if (showExtraButtons) {
            animateExtraButtons();
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => showExtraButtons && animateExtraButtons()}>
            <View style={{ flex: 1 }}>
                <Tab.Navigator initialRouteName={Screens.HOME} screenOptions={{ headerShown: false, animation: 'fade' }}>
                    <Tab.Screen
                        name={Screens.HOME}
                        options={{ tabBarLabel: t('home') }}
                        component={HomeScreen}
                        listeners={({ navigation }) => ({
                            tabPress: (e) => {
                                handleTabPress(e);
                                navigation.navigate(Screens.HOME);
                            },
                        })}
                    />
                    <Tab.Screen
                        name={Screens.EXPENSE_OPERATIONS}
                        component={ExpenseOperationsScreen}
                        options={{
                            tabBarLabel: t('expenses'),
                            tabBarIcon: () => (
                                <QrButtonComponent
                                    showExtraButtons={showExtraButtons}
                                    animationValue={animationValue}
                                />
                            ),
                        }}
                        listeners={() => ({
                            tabPress: (e) => {
                                e.preventDefault();
                                animateExtraButtons();
                            },
                        })}
                    />
                    <Tab.Screen
                        name={Screens.SETTINGS}
                        options={{ tabBarLabel: t('settings') }}
                        component={SettingsScreen}
                        listeners={({ navigation }) => ({
                            tabPress: (e) => {
                                handleTabPress(e);
                                navigation.navigate(Screens.SETTINGS);
                            },
                        })}
                    />
                </Tab.Navigator>
            </View>
        </TouchableWithoutFeedback>
    );
});

const ExpenseOperationsScreen = () => (
    <View>
        <AppText.Base>EXPENSE_OPERATIONS</AppText.Base>
    </View>
);

const SettingsScreen = () => (
    <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <AppText.Base>Settings</AppText.Base>
    </View>
);


const ExpenseAddManualScreen = () => (
    <View>
        <AppText.Base>Add manual</AppText.Base>
    </View>
);

const ExpenseScanQRScreen = () => (
    <View>
        <AppText.Base>SCAN QR</AppText.Base>
    </View>
);