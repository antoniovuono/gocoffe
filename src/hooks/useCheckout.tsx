import React, { createContext, useContext } from 'react';

interface ICheckoutContext {}

const CheckoutContent = createContext<ICheckoutContext>({} as ICheckoutContext);

export const CheckoutProvider: React.FC = ({ children }) => {
    return (
        <CheckoutContent.Provider value={{}}>
            {children}
        </CheckoutContent.Provider>
    );
};

const useCheckout = (): ICheckoutContext => {
    return useContext(CheckoutContent);
};

export default useCheckout;
