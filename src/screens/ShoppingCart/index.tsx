import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import Toast from 'react-native-toast-message';
import * as Styled from './styles';
import ProductCart from './components/ProductCart/index';
import { ICheckout } from '../../interfaces/ICheckout';
import useCheckout from '../../hooks/useCheckout';

const ShoppingCart: React.FC = () => {
    const [cart, setCart] = useState<ICheckout[]>([]);

    const { getCartProductsList } = useCheckout();

    const getCartProducts = async () => {
        try {
            const products_cart = await getCartProductsList();
            setCart(products_cart);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'Error to loading cart products!',
            });
        }
    };

    useEffect(() => {
        getCartProducts();
    }, []);

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
                <Styled.ProductsList
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductCart />}
                />
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
