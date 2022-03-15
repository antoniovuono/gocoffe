import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const SizeButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    width: 30%;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 20px;
`;

export const SizeButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
`;
