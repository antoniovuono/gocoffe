import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    padding: 8px;
    border-radius: 10px;
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
`;

export const ProductPhotoContent = styled.View``;

export const ProductPhoto = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    border-radius: 15px;
`;

export const DetailsContent = styled.View`
    padding: 0 15px;
    max-width: 65%;
`;

export const ProductTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.secondary};
    font-size: ${RFValue(14)}px;
`;

export const ProductType = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(9)}px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-size: ${RFValue(9)}px;
    margin-top: 5px;
`;

export const DeleteButtonContent = styled.View`
    justify-content: center;
    align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity``;
