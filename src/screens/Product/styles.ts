import {
    getBottomSpace,
    getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.primary_background};
    width: 100%;
    padding: 0 20px;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.COLORS.primary_background};
    width: 100%;
    flex-direction: row;
    margin-top: ${getStatusBarHeight() + 30}px;
    justify-content: space-between;
    padding: 20px 0;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const ButtonFavoriteProduct = styled.TouchableOpacity``;

export const ProductPageContent = styled.ScrollView`
    width: 100%;
    flex: 1;
`;

export const ProductImage = styled.Image`
    width: 100%;
    height: 390px;
    border-radius: ${RFValue(20)}px;
    margin-top: ${RFValue(20)}px;
`;

export const ProductDetails = styled.View`
    margin-top: ${RFValue(20)}px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
`;

export const DetailsAndPriceContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

export const ProductTitleContent = styled.View`
    width: 50%;
`;

export const ProductName = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(16)}px;
`;

export const ProductType = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.regular};
    font-size: ${RFValue(9)}px;
`;

export const PriceContent = styled.View`
    width: 40%;
`;

export const Price = styled.Text<{ orange?: boolean }>`
    text-align: right;
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(14)}px;

    ${({ orange }) =>
        orange &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `};
`;

export const RatingAndQuantity = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const RatingContent = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${RFValue(5)}px;
`;

export const RatingText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(12)}px;
    margin-left: 5px;
`;

export const QuantityContent = styled.View``;

export const DescriptionContent = styled.View`
    margin-top: ${RFValue(15)}px;
    padding: 0 10px;
`;

export const DescriptionTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.regular};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
    margin-top: ${RFValue(8)}px;
    text-align: justify;
`;

export const SizeContent = styled.View`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
`;

export const ButtonsContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(10)}px;
`;

export const CheckoutSection = styled.View`
    padding: 20px;
    width: 100%;
    flex-direction: row;
    margin-bottom: ${getBottomSpace() + 10}px;
`;

export const OrderPrice = styled.View`
    width: 30%;
    justify-content: center;
    align-items: center;
`;

export const PriceLabel = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.regular};
`;

export const TotalPrice = styled.Text<{ orangelabel?: boolean }>`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.FONTS.medium};

    ${({ orangelabel }) =>
        orangelabel &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `}
`;

export const ButtonSection = styled.View`
    width: 70%;
`;

export const CheckoutButton = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.secondary};
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(10)}px;
`;

export const CheckoutButtonTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.medium};
`;

export const Loader = styled.ActivityIndicator``;
