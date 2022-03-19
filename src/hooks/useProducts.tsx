/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/apis/gocoffe';

interface IProductsContext {
    getProductsDetails: () => Promise<any>;
    // eslint-disable-next-line no-unused-vars
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
    getFavoritedProducts: () => Promise<any>;
    removeFavorite: (product_id: string) => Promise<any>;
}

const ProductContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider: React.FC = ({ children }) => {
    const getProductsDetails = useCallback(async () => {
        const response = await api.get(`/products`);
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

    const getFavoritedProducts = useCallback(async () => {
        const response = await api.get(`/favorites`);
        return response.data;
    }, []);

    const removeFavorite = useCallback(async (product_id: string) => {
        const response = await api.delete(`/favorites/${product_id}`);

        return response.data;
    }, []);

    return (
        <ProductContext.Provider
            value={{
                getProductsDetails,
                favoriteProducts,
                getFavoritedProducts,
                removeFavorite,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

const useProducts = (): IProductsContext => {
    return useContext(ProductContext);
};

export default useProducts;
