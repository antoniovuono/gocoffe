import { getStatusBarHeight } from 'react-native-iphone-x-helper';
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

export const RatingAndQuantity = styled.View``;
