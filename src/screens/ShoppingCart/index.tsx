import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import Toast from 'react-native-toast-message';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import * as Styled from './styles';
import ProductCart from './components/ProductCart/index';
import { ICheckout } from '../../interfaces/ICheckout';
import useCheckout from '../../hooks/useCheckout';

const ShoppingCart: React.FC = () => {
    const [cart, setCart] = useState<ICheckout[]>([]);
    const [productsLoading, setProductsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checkoutLoading, setCheckoutLoading] = useState(false);

    const { getCartProductsList, removeProduct, checkoutOrder, clearCart } =
        useCheckout();
    const theme = useTheme();
    const navigation = useNavigation();

    const getCartProducts = async () => {
        setProductsLoading(true);
        try {
            const products_cart = await getCartProductsList();
            setCart(products_cart);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'Error to loading cart products!',
            });
        } finally {
            setProductsLoading(false);
        }
    };

    const handleDeleteProduct = async (id: string) => {
        try {
            setLoading(true);
            await removeProduct(id);

            Toast.show({
                type: 'success',
                text1: 'Good job!',
                text2: 'Product removed successfully',
            });
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'Error to remove product!',
            });
        } finally {
            setLoading(false);
        }
    };

    const orderPriceExctration = cart.map(element => {
        return element.price;
    });

    const totalOrder = orderPriceExctration.reduce(
        (prev, current) => prev + current,
        0,
    );

    const handleCheckout = async () => {
        try {
            const id = uuid.v4();
            setCheckoutLoading(true);
            await checkoutOrder(id, totalOrder, cart);

            // const cart_products = cart.map(element => {
            //     return element.id;
            // });

            Toast.show({
                type: 'success',
                text1: 'Success!',
                text2: 'Order checkout completed!',
            });
            navigation.navigate('Checkout');
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Ops!',
                text2: 'Error at checkout',
            });
        } finally {
            setCheckoutLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            getCartProducts();
        }, [loading]),
    );

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
                    You have {cart.length} {cart.length <= 1 ? 'item' : 'items'}{' '}
                    in your shopping cart
                </Styled.CounterTitle>
            </Styled.CounterContent>

            <Styled.CartProductsList>
                {productsLoading ? (
                    <Styled.Loader color={theme.COLORS.secondary} />
                ) : (
                    <>
                        <Styled.DeleteInformation>
                            <AntDesign
                                name="delete"
                                size={16}
                                color={theme.COLORS.primary_title}
                            />
                            <Styled.DeleteInformationText>
                                Hold down pressed to remove product to the cart
                            </Styled.DeleteInformationText>
                        </Styled.DeleteInformation>
                        <Styled.ProductsList
                            showsVerticalScrollIndicator={false}
                            data={cart}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <ProductCart
                                    onDeletePress={() =>
                                        handleDeleteProduct(item.id)
                                    }
                                    photo={item.photo}
                                    title={item.name}
                                    type={item.type}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            )}
                        />
                    </>
                )}
            </Styled.CartProductsList>

            <Styled.FooterContent>
                <Styled.TitleContent>
                    <Styled.TotalLabel>Total price</Styled.TotalLabel>
                    <Styled.TotalAmountText>
                        <Styled.TotalAmountText orange>
                            $
                        </Styled.TotalAmountText>{' '}
                        {totalOrder.toFixed(2)}
                    </Styled.TotalAmountText>
                </Styled.TitleContent>

                <Styled.ButtonCheckout onPress={handleCheckout}>
                    {checkoutLoading ? (
                        <Styled.Loader color={theme.COLORS.primary_title} />
                    ) : (
                        <Styled.ButtonCheckoutLabel>
                            Checkout
                        </Styled.ButtonCheckoutLabel>
                    )}
                </Styled.ButtonCheckout>
            </Styled.FooterContent>
        </Styled.Container>
    );
};

export default ShoppingCart;
