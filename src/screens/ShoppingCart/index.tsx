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

            <Styled.FooterContent>
                <Styled.TitleContent>
                    <Styled.TotalLabel>Total price</Styled.TotalLabel>
                    <Styled.TotalAmountText>R$ 14.94</Styled.TotalAmountText>
                </Styled.TitleContent>

                <Styled.ButtonCheckout>
                    <Styled.ButtonCheckoutLabel>
                        Checkout
                    </Styled.ButtonCheckoutLabel>
                </Styled.ButtonCheckout>
            </Styled.FooterContent>
        </Styled.Container>
    );
};

export default ShoppingCart;
