import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.primary_background};
    padding: 20px;
`;

export const Header = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 15}px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.FONTS.semi_bold};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const CounterContent = styled.View`
    background-color: ${({ theme }) => theme.COLORS.secondary_dark};
    padding: 5px;
    border-radius: 20px;
    margin-top: ${RFValue(20)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CounterTitle = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.secondary};
    margin-left: ${RFValue(10)}px;
`;

export const DeleteInformation = styled.View`
    width: 100%;
    align-items: flex-end;
    padding: 5px 10px;
    flex-direction: row;
`;

export const DeleteInformationText = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
    margin-left: 10px;
`;

export const CartProductsList = styled.View`
    flex: 1;
    justify-content: center;
    padding: 8px;
`;

export const ProductsList = styled(FlatList).attrs(
    {},
)`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

export const FooterContent = styled.View`
    width: 100%;
    padding: 5px;
`;

export const TitleContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalLabel = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const TotalAmountText = styled.Text<{ orange?: boolean }>`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.primary_title};

    ${({ orange, theme }) =>
        orange &&
        css`
            color: ${theme.COLORS.secondary};
        `};
`;

export const ButtonCheckout = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.secondary};
    padding: 15px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const ButtonCheckoutLabel = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const Loader = styled.ActivityIndicator``;
