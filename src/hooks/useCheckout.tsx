/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useCallback } from 'react';
import { ICheckout } from '../interfaces/ICheckout';
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
    checkoutOrder: (
        id: string,
        date: Date,
        total_price: number,
        product_list: ICheckout[],
    ) => Promise<any>;
    clearCart: (product_id: string[]) => Promise<any>;
    getOrders: () => Promise<any>;
}

const CheckoutContent = createContext<ICheckoutContext>({} as ICheckoutContext);

export const CheckoutProvider: React.FC = ({ children }) => {
    const addProductToCart = useCallback(
        async (
            id: string,
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

    const checkoutOrder = useCallback(
        async (
            id: string,
            date: Date,
            total_price: number,
            products_list: ICheckout[],
        ) => {
            const response = await api.post(`/checkout`, {
                id,
                date,
                total_price,
                products_list,
            });
            return response.data;
        },
        [],
    );

    const getOrders = useCallback(async () => {
        const response = await api.get(`/checkout`);

        return response.data;
    }, []);

    const clearCart = useCallback(async (product_id: string[]) => {
        const response = await api.delete(`/cart/${product_id}`);

        return response.data;
    }, []);

    return (
        <CheckoutContent.Provider
            value={{
                addProductToCart,
                getCartProductsList,
                removeProduct,
                checkoutOrder,
                clearCart,
                getOrders,
            }}
        >
            {children}
        </CheckoutContent.Provider>
    );
};

const useCheckout = (): ICheckoutContext => {
    return useContext(CheckoutContent);
};

export default useCheckout;
