import React from 'react';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.primary_background};
    padding: 0 20px;
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + 30}px;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.semi_bold};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(24)}px;
`;

export const SearchSection = styled.View`
    width: 100%;
    margin-top: ${RFValue(20)}px;
`;

export const CounterOrdersContent = styled.View`
    margin-top: 20px;
    padding: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const CounterOrders = styled.Text`
    color: ${({ theme }) => theme.COLORS.secondary};
    font-family: ${({ theme }) => theme.FONTS.regular};
    font-size: ${RFValue(12)}px;

    margin-left: 5px;
`;

export const Reload = styled.TouchableOpacity``;

export const MyOrdersContent = styled.View`
    flex: 1;
    justify-content: center;
`;

export const OrdersList = styled(FlatList).attrs(
    {},
)`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

export const Loader = styled.ActivityIndicator``;
