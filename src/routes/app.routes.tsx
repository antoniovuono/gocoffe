import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import Home from '../screens/Home';
import MyOrders from '../screens/MyOrders';

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
                tabBarInactiveTintColor: theme.COLORS.secondary_dark,
                tabBarActiveTintColor: theme.COLORS.secondary,
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="MyOrders" component={MyOrders} />
        </Navigator>
    );
};

export default routes;
