/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useCallback } from 'react';
import { ICheckout } from '../interfaces/ICheckout';
import api from '../services/apis/gocoffe';

interface ICheckoutContext {
    addProductToCart: (product_cart: ICheckout) => Promise<any>;
}

const CheckoutContent = createContext<ICheckoutContext>({} as ICheckoutContext);

export const CheckoutProvider: React.FC = ({ children }) => {
    const addProductToCart = useCallback(async (product_car: ICheckout) => {
        const response = await api.post(`/cart`, { product_car });

        return response.data;
    }, []);

    return (
        <CheckoutContent.Provider value={{ addProductToCart }}>
            {children}
        </CheckoutContent.Provider>
    );
};

const useCheckout = (): ICheckoutContext => {
    return useContext(CheckoutContent);
};

export default useCheckout;
