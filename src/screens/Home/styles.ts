import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.primary_background};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 30}px;
    padding: 0 20px;
`;

export const WelcomeTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.primary_title};
    font-family: ${({ theme }) => theme.FONTS.regular};
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.semi_bold};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const SearchSection = styled.View`
    width: 100%;
    padding: 20px;
`;
