import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const CartProductsList = styled.View`
    margin-top: 20px;
`;
