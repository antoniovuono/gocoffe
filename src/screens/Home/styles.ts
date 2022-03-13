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
    flex-direction: row;
    align-items: center;
`;

export const DetailsContent = styled.View`
    width: 80%;
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

export const ProfileContent = styled.View`
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const PhotoProfile = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 100px;
`;

export const SignOutButton = styled.TouchableOpacity``;

export const SignOut = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.regular};
    color: ${({ theme }) => theme.COLORS.secondary};
    font-size: ${RFValue(10)}px;
    margin-top: 10px;
`;

export const SearchSection = styled.View`
    width: 100%;
    padding: 20px;
`;

export const PromotionContent = styled.View`
    width: 100%;
    padding: 0 20px;
`;

export const PromotionTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.FONTS.semi_bold};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;

export const PromoImage = styled.Image`
    height: ${RFValue(123)}px;
    width: 100%;
    margin-top: 15px;
`;

export const FilterButtons = styled.ScrollView`
    width: 100%;
    margin-top: 15px;
`;
