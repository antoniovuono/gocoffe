import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    border-radius: 20px;
    margin-top: 10px;
`;

export const PhotoContent = styled.View`
    padding: 8px;
`;

export const Photo = styled.Image`
    width: ${RFValue(84)}px;
    height: ${RFValue(84)};
    border-radius: 20px;
`;

export const DetailsContent = styled.View`
    padding: 10px 5px;
`;

export const TitlesContent = styled.View`
    justify-content: center;
`;

export const ProductTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const ProductSubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.regular};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const FooterContent = styled.View`
    width: 65%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(25)}px;
    align-items: center;
`;

export const Amount = styled.Text<{ amount?: boolean }>`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};

    ${({ amount }) =>
        amount &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `}
`;

export const Quantity = styled.Text<{ quantity?: boolean }>`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(11)}px;
    color: ${({ theme }) => theme.COLORS.secondary};
    margin-right: 15px;

    ${({ quantity }) =>
        quantity &&
        css`
            color: ${({ theme }) => theme.COLORS.primary_title};
        `}
`;
