import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import StarIcon from '../../assets/icons/star.svg';
import * as Styled from './styles';

const Product: React.FC = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
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
                                totalHeight={35}
                                totalWidth={80}
                                rounded
                                textColor={theme.COLORS.secondary_title}
                                rightButtonBackgroundColor={
                                    theme.COLORS.secondary_background
                                }
                                leftButtonBackgroundColor={
                                    theme.COLORS.secondary_background
                                }
                                borderColor={theme.COLORS.secondary_title}
                                iconStyle={{
                                    color: theme.COLORS.secondary_title,
                                }}
                            />
                        </Styled.QuantityContent>
                    </Styled.RatingAndQuantity>
                </Styled.ProductDetails>
            </Styled.ProductPageContent>
        </Styled.Container>
    );
};

export default Product;
