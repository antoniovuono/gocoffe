import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationRoute from './NavigationBar';
import Product from '../screens/Product';
import Checkout from '../screens/Checkout';

const { Navigator, Screen } = createStackNavigator();

const routes: React.FC = () => {
    return (
        <Navigator
            initialRouteName="NavigationBar"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="NavigationBar" component={NavigationRoute} />
            <Screen name="ProductPage" component={Product} />
            <Screen name="Checkout" component={Checkout} />
        </Navigator>
    );
};

export default routes;
