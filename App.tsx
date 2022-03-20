import 'react-native-gesture-handler';
import React from 'react';
import Toast from 'react-native-toast-message';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import Routes from './src/routes';
import theme from './src/theme';
import { ProductsProvider } from './src/hooks/useProducts';
import { FavoritesProvider } from './src/hooks/useFavorites';

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                translucent
                style="light"
                backgroundColor="transparent"
            />
            <ProductsProvider>
                <FavoritesProvider>
                    <Routes />
                    <Toast />
                </FavoritesProvider>
            </ProductsProvider>
        </ThemeProvider>
    );
}
