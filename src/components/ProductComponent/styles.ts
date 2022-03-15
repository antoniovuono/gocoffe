import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    width: ${RFValue(159)}px;
    height: ${RFValue(213)}px;
    border-radius: 20px;
    margin: 5px;
`;

export const ImageContent = styled(RectButton)`
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const ProductImage = styled.Image`
    border-radius: ${RFValue(20)}px;
    height: ${RFValue(134)}px;
    width: ${RFValue(135)}px;
`;

export const ProductReviewContent = styled.View`
    background-color: ${({ theme }) => theme.COLORS.dark};
    opacity: 0.8;
    padding: 10px 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    position: absolute;
    bottom: 131px;
    right: 14px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ProductReview = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(12)}px;
    margin-left: 5px;
`;

export const DetailsContent = styled.View`
    justify-content: center;
    margin-left: 15px;
`;

export const ProductName = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(12)}px;
`;

export const ProductDetail = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(8)}px;
    margin-top: ${RFValue(2)}px;
`;

export const ProductPrice = styled.Text<{ dollar?: boolean }>`
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(12)}px;
    margin-top: ${RFValue(3)}px;

    ${({ dollar }) =>
        dollar &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `}
`;

export const AddToCard = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.secondary};
    position: absolute;
    padding: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;

    right: 1px;
    top: 22px;
`;
