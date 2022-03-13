import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/apis/gocoffe';

interface IProductsContext {
    getProductsDetails: () => Promise<any>;
}

const ProductContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider: React.FC = ({ children }) => {
    const getProductsDetails = useCallback(async () => {
        const response = await api.get(`/products`);
        return response.data;
    }, []);

    return (
        <ProductContext.Provider value={{ getProductsDetails }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProducts = (): IProductsContext => {
    return useContext(ProductContext);
};

export default useProducts;
