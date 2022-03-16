import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/apis/gocoffe';
import { IProducts } from '../interfaces/IProducts';

interface IProductsContext {
    getProductsDetails: () => Promise<any>;
    // eslint-disable-next-line no-unused-vars
    favoriteProducts: (product: IProducts) => Promise<any>;
}

const ProductContext = createContext<IProductsContext>({} as IProductsContext);

export const ProductsProvider: React.FC = ({ children }) => {
    const getProductsDetails = useCallback(async () => {
        const response = await api.get(`/products`);
        return response.data;
    }, []);

    const favoriteProducts = useCallback(async (product: IProducts) => {
        const response = await api.post(`/favorites`, {
            product,
        });

        return response.data;
    }, []);

    return (
        <ProductContext.Provider
            value={{ getProductsDetails, favoriteProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};

const useProducts = (): IProductsContext => {
    return useContext(ProductContext);
};

export default useProducts;
