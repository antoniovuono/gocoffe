import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import StarIcon from '../../assets/icons/star.svg';
import * as Styled from './styles';
import SizeButtons from '../../components/SizeButtons';

interface IQuantityInput {
    value: number;
}

const Product: React.FC = () => {
    const [quantity, setQuantity] = useState<IQuantityInput | any>(0);
    const [selectedButtonS, setSelectedButtonS] = useState(false);
    const [selectedButtonM, setSelectedButtonM] = useState(false);
    const [selectedButtonL, setSelectedButtonL] = useState(false);

    const theme = useTheme();
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleClickS = () => {
        setSelectedButtonM(false);
        setSelectedButtonL(false);
        setSelectedButtonS(!selectedButtonS);
    };

    const handleClickM = () => {
        setSelectedButtonS(false);
        setSelectedButtonL(false);
        setSelectedButtonM(!selectedButtonM);
    };

    const handleClickL = () => {
        setSelectedButtonS(false);
        setSelectedButtonM(false);
        setSelectedButtonL(!selectedButtonL);
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

                <Styled.HeaderTitle>Cappuccino</Styled.HeaderTitle>

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

            <Styled.ProductPageContent>
                <Styled.ProductImage
                    source={{
                        uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1647143105/gocoffe/Captura_de_Tela_2022-03-13_a%CC%80s_00.44.56_mioql3.png',
                    }}
                />

                <Styled.ProductDetails>
                    <Styled.DetailsAndPriceContent>
                        <Styled.ProductTitleContent>
                            <Styled.ProductName>Cappuccino</Styled.ProductName>
                            <Styled.ProductType>
                                With chocolate
                            </Styled.ProductType>
                        </Styled.ProductTitleContent>

                        <Styled.PriceContent>
                            <Styled.Price>
                                <Styled.Price orange>$ </Styled.Price>5.50
                            </Styled.Price>
                        </Styled.PriceContent>
                    </Styled.DetailsAndPriceContent>

                    <Styled.RatingAndQuantity>
                        <Styled.RatingContent>
                            <StarIcon />
                            <Styled.RatingText>4.4</Styled.RatingText>
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
                        Espresso is generally denser than coffee brewed by other
                        methods, having a higher concentration of suspended and
                        dissolved solids; it generally has a creamy foam on top
                        known as crema. Espresso is the base for a number of
                        other coffee drinks, such as latte, cappuccino,
                        macchiato, mocha, and americano.
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
                        />
                        <SizeButtons
                            title="G"
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
                            10.12
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
