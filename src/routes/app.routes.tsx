import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Foundation, Feather, MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import MyOrders from '../screens/MyOrders';
import ShoppingCart from '../screens/ShoppingCart';
import Messages from '../screens/Messages';

const { Navigator, Screen } = createBottomTabNavigator();

const routes: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.COLORS.third_background,
                tabBarActiveTintColor: theme.COLORS.secondary,
                tabBarStyle: {
                    backgroundColor: theme.COLORS.primary_background,
                    borderTopColor: theme.COLORS.primary_background,
                },
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Foundation name="home" size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name="ShoppingCart"
                component={ShoppingCart}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="shopping-cart"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="email" size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name="MyOrders"
                component={MyOrders}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="dashboard"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Navigator>
    );
};

export default routes;
