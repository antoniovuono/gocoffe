import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonProductType = styled(RectButton)<{ selected?: boolean }>`
    padding: 10px 20px;
    margin-left: 10px;
    height: 40px;

    ${({ selected }) =>
        selected &&
        css`
            background-color: ${({ theme }) => theme.COLORS.secondary_dark};
            border-radius: 20px;
        `}
`;

export const ButtonTitle = styled.Text<{ selected?: boolean }>`
    font-family: ${({ theme }) => theme.FONTS.medium};
    color: ${({ theme }) => theme.COLORS.third_background};
    font-size: ${RFValue(12)}px;

    ${({ selected }) =>
        selected &&
        css`
            color: ${({ theme }) => theme.COLORS.secondary};
        `}
`;
