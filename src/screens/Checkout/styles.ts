import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.primary_background};
`;

export const CheckoutTitle = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.FONTS.semi_bold};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const CheckoutDescription = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
    text-align: center;
    padding: 20px 60px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
    padding: 20px 40px;
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    border-radius: 5px;
    margin-top: ${RFValue(90)}px;
`;

export const ButtonConfirmTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;
