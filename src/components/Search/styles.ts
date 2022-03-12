import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    flex-direction: row;
    border-radius: 10px;
`;

export const SearchInput = styled.TextInput`
    width: 70%;
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    color: ${({ theme }) => theme.COLORS.primary_title};
    border-radius: 10px;
    height: 50px;
    padding: 0 15px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.FONTS.regular};
`;

export const SearchButton = styled(RectButton)`
    width: 30%;
    background-color: ${({ theme }) => theme.COLORS.secondary};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
`;
