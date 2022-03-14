import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';

const routes: React.FC = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
};

export default routes;
