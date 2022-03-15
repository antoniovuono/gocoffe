import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const SizeButton = styled.TouchableOpacity<{ selected?: boolean }>`
    background-color: ${({ theme }) => theme.COLORS.secondary_background};
    width: 30%;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 20px;

    ${({ selected }) =>
        selected &&
        css`
            border: 1px solid ${({ theme }) => theme.COLORS.secondary};
        `}
`;

export const SizeButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.medium};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
`;
