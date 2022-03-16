import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import StarIcon from '../../assets/icons/star.svg';
import * as Styled from './styles';
import SizeButtons from '../../components/SizeButtons';
import { IProducts } from '../../interfaces/IProducts';

interface IProductsParmas {
    products_data: IProducts;
}
interface IQuantityInput {
    value: number;
}

const Product: React.FC = () => {
    const [quantity, setQuantity] = useState<IQuantityInput | any>(0);
    const [selectedButtonS, setSelectedButtonS] = useState(false);
    const [selectedButtonM, setSelectedButtonM] = useState(false);
    const [selectedButtonL, setSelectedButtonL] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { products_data } = route.params as IProductsParmas;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleClickS = () => {
        setSelectedSize('S');
        setSelectedButtonM(false);
        setSelectedButtonL(false);
        setSelectedButtonS(!selectedButtonS);
    };

    const handleClickM = () => {
        setSelectedSize('M');
        setSelectedButtonS(false);
        setSelectedButtonL(false);
        setSelectedButtonM(!selectedButtonM);
    };

    const handleClickL = () => {
        setSelectedSize('L');
        setSelectedButtonS(false);
        setSelectedButtonM(false);
        setSelectedButtonL(!selectedButtonL);
    };

    const priceCalculator = () => {
        if (selectedSize === 'S') {
            return products_data.price_small;
        }
        if (selectedSize === 'M') {
            return products_data.price_medium;
        }
        return products_data.price_large;
    };

    const checkoutPriceCalculator = () => {
        const totalPrice = quantity * priceCalculator();

        return totalPrice.toFixed(2);
    };

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.ButtonGoBack
                    hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
                    onPress={handleGoBack}
                >
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color={theme.COLORS.primary_title}
                    />
                </Styled.ButtonGoBack>

                <Styled.HeaderTitle>{products_data.name}</Styled.HeaderTitle>

                <Styled.ButtonFavoriteProduct
                    hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
                >
                    <MaterialIcons
                        name="favorite-border"
                        size={24}
                        color={theme.COLORS.primary_title}
                    />
                </Styled.ButtonFavoriteProduct>
            </Styled.Header>

            <Styled.ProductPageContent showsVerticalScrollIndicator={false}>
                <Styled.ProductImage
                    source={{
                        uri: products_data.photo,
                    }}
                />

                <Styled.ProductDetails>
                    <Styled.DetailsAndPriceContent>
                        <Styled.ProductTitleContent>
                            <Styled.ProductName>
                                {products_data.name}
                            </Styled.ProductName>
                            <Styled.ProductType>
                                {products_data.type}
                            </Styled.ProductType>
                        </Styled.ProductTitleContent>

                        <Styled.PriceContent>
                            <Styled.Price>
                                <Styled.Price orange>$ </Styled.Price>
                                {priceCalculator()}
                            </Styled.Price>
                        </Styled.PriceContent>
                    </Styled.DetailsAndPriceContent>

                    <Styled.RatingAndQuantity>
                        <Styled.RatingContent>
                            <StarIcon />
                            <Styled.RatingText>
                                {products_data.rating}
                            </Styled.RatingText>
                        </Styled.RatingContent>

                        <Styled.QuantityContent>
                            <NumericInput
                                // eslint-disable-next-line react/destructuring-assignment
                                initValue={quantity < 0 ? 0 : quantity}
                                value={quantity.value}
                                onChange={value =>
                                    setQuantity(value < 0 ? 0 : value)
                                }
                                valueType="integer"
                                totalHeight={35}
                                totalWidth={80}
                                rounded
                                textColor={theme.COLORS.secondary}
                                rightButtonBackgroundColor={
                                    theme.COLORS.secondary_background
                                }
                                leftButtonBackgroundColor={
                                    theme.COLORS.secondary_background
                                }
                                borderColor={theme.COLORS.secondary_title}
                                iconStyle={{
                                    color: theme.COLORS.secondary,
                                }}
                            />
                        </Styled.QuantityContent>
                    </Styled.RatingAndQuantity>
                </Styled.ProductDetails>

                <Styled.DescriptionContent>
                    <Styled.DescriptionTitle>
                        Description
                    </Styled.DescriptionTitle>

                    <Styled.Description>
                        {products_data.description}
                    </Styled.Description>
                </Styled.DescriptionContent>

                <Styled.SizeContent>
                    <Styled.DescriptionTitle>
                        Choose Size
                    </Styled.DescriptionTitle>

                    <Styled.ButtonsContent>
                        <SizeButtons
                            title="S"
                            selected_button={selectedButtonS}
                            onPress={handleClickS}
                        />
                        <SizeButtons
                            title="M"
                            selected_button={selectedButtonM}
                            onPress={handleClickM}
                            disabled={false}
                        />
                        <SizeButtons
                            title="L"
                            selected_button={selectedButtonL}
                            onPress={handleClickL}
                        />
                    </Styled.ButtonsContent>
                </Styled.SizeContent>

                <Styled.CheckoutSection>
                    <Styled.OrderPrice>
                        <Styled.PriceLabel>Total price</Styled.PriceLabel>
                        <Styled.TotalPrice>
                            <Styled.TotalPrice orangelabel>$</Styled.TotalPrice>
                            {checkoutPriceCalculator()}
                        </Styled.TotalPrice>
                    </Styled.OrderPrice>

                    <Styled.ButtonSection>
                        <Styled.CheckoutButton activeOpacity={0.5}>
                            <Styled.CheckoutButtonTitle>
                                Add to cart
                            </Styled.CheckoutButtonTitle>
                        </Styled.CheckoutButton>
                    </Styled.ButtonSection>
                </Styled.CheckoutSection>
            </Styled.ProductPageContent>
        </Styled.Container>
    );
};

export default Product;
