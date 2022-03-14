import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
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
            <Screen name="Home" component={Home} />
            <Screen name="ShoppingCart" component={ShoppingCart} />
            <Screen name="Messages" component={Messages} />
            <Screen name="MyOrders" component={MyOrders} />
        </Navigator>
    );
};

export default routes;
