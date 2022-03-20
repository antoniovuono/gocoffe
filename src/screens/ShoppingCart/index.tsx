import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as Styled from './styles';
import ProductCart from './components/ProductCart/index';

const ShoppingCart: React.FC = () => {
    const theme = useTheme();
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Title>Shopping cart</Styled.Title>
            </Styled.Header>

            <Styled.CounterContent>
                <AntDesign
                    name="shoppingcart"
                    size={24}
                    color={theme.COLORS.secondary}
                />
                <Styled.CounterTitle>
                    You have 2 items in your shopping cart
                </Styled.CounterTitle>
            </Styled.CounterContent>

            <Styled.CartProductsList>
                <ProductCart />
            </Styled.CartProductsList>
        </Styled.Container>
    );
};

export default ShoppingCart;
