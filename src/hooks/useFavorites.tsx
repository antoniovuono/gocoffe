/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/apis/gocoffe';

interface IFavoritesContext {
    getFavoritedProducts: () => Promise<any>;
    removeFavorite: (product_id: string) => Promise<any>;
    favoriteProducts: (
        id: string,
        name: string,
        description: string,
        photo: string,
        type: string,
        rating: number,
        price_small: number,
        price_medium: number,
        price_large: number,
        size: string,
    ) => Promise<any>;
}

const FavoritesContext = createContext<IFavoritesContext>(
    {} as IFavoritesContext,
);

export const FavoritesProvider: React.FC = ({ children }) => {
    const getFavoritedProducts = useCallback(async () => {
        const response = await api.get(`/favorites`);
        return response.data;
    }, []);

    const removeFavorite = useCallback(async (product_id: string) => {
        const response = await api.delete(`/favorites/${product_id}`);

        return response.data;
    }, []);

    const favoriteProducts = useCallback(
        async (
            id: string,
            name: string,
            description: string,
            photo: string,
            type: string,
            rating: number,
            price_small: number,
            price_medium: number,
            price_large: number,
            size: string,
        ) => {
            const response = await api.post(`/favorites`, {
                id,
                name,
                description,
                photo,
                type,
                rating,
                price_small,
                price_medium,
                price_large,
                size,
            });

            return response.data;
        },
        [],
    );

    return (
        <FavoritesContext.Provider
            value={{
                getFavoritedProducts,
                removeFavorite,
                favoriteProducts,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

const useFavorites = (): IFavoritesContext => {
    return useContext(FavoritesContext);
};

export default useFavorites;
