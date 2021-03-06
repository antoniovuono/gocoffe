import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    padding: 20px;
    border-radius: 20px;
    margin-top: 10px;
`;

export const FirstContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const OrderId = styled.Text<{ orange?: boolean }>`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.regular};
    font-size: ${RFValue(12)}px;

    ${({ orange }) =>
        orange &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `}
`;

export const Date = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.regular};
    font-size: ${RFValue(12)}px;
`;

export const OrdersDetails = styled.View`
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Detail = styled.Text`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.bold};
    font-size: ${RFValue(12)}px;
`;

export const Amount = styled.Text<{ dollar?: boolean }>`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.regular};
    font-size: ${RFValue(12)}px;
    margin-left: 10px;

    ${({ dollar }) =>
        dollar &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `}
`;

export const TotalPriceContent = styled.View`
    margin-top: 10px;
`;

export const TotalPrice = styled.Text<{ dollar2?: boolean }>`
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(12)}px;
    text-align: right;

    ${({ dollar2 }) =>
        dollar2 &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `}
`;
