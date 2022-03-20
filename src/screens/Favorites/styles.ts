import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.primary_background};
`;

export const Header = styled.View`
    width: 100%;
    padding: 20px;
    flex-direction: row;
    margin-top: ${getStatusBarHeight() + 15}px;
    justify-content: space-between;
    align-items: center;
`;

export const SectionTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.semi_bold};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(14)}px;
`;

export const CounterFavoritesContent = styled.View`
    width: 100%;
    padding: 0 20px;
`;

export const CoutnerLabel = styled.View`
    background-color: ${({ theme }) => theme.COLORS.secondary_dark};
    padding: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    flex-direction: row;
`;

export const CounterTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.secondary};
    font-size: ${RFValue(12)}px;
    margin-left: ${RFValue(10)}px;
`;

export const ProductsFavoritesContainer = styled.View`
    flex: 1;
    width: 100%;
    padding: 20px;
`;

export const FavoritedsList = styled(FlatList).attrs(
    {},
)`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

export const Loader = styled.ActivityIndicator.attrs({
    size: 'small',
})`
    margin-top: ${RFValue(240)}px;
`;
