/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useCallback } from 'react';
import api from '../services/apis/gocoffe';

interface ICheckoutContext {
    addProductToCart: (
        id: string | number[],
        name: string,
        type: string,
        photo: string,
        description: string,
        quantity: number,
        size: string,
        price: number,
    ) => Promise<any>;
    getCartProductsList: () => Promise<any>;
    removeProduct: (product_id: string) => Promise<any>;
}

const CheckoutContent = createContext<ICheckoutContext>({} as ICheckoutContext);

export const CheckoutProvider: React.FC = ({ children }) => {
    const addProductToCart = useCallback(
        async (
            id: string | number[],
            name: string,
            type: string,
            photo: string,
            description: string,
            quantity: number,
            size: string,
            price: number,
        ) => {
            const response = await api.post(`/cart`, {
                id,
                name,
                type,
                photo,
                description,
                quantity,
                size,
                price,
            });

            return response.data;
        },
        [],
    );

    const getCartProductsList = useCallback(async () => {
        const response = await api.get(`/cart`);
        return response.data;
    }, []);

    const removeProduct = useCallback(async (product_id: string) => {
        const response = await api.delete(`/cart/${product_id}`);

        return response.data;
    }, []);

    return (
        <CheckoutContent.Provider
            value={{ addProductToCart, getCartProductsList, removeProduct }}
        >
            {children}
        </CheckoutContent.Provider>
    );
};

const useCheckout = (): ICheckoutContext => {
    return useContext(CheckoutContent);
};

export default useCheckout;
