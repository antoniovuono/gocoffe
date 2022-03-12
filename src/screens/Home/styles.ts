import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.primary_background};
`;

export const Title = styled.Text`
    font-size: 30px;
    font-family: ${({ theme }) => theme.FONTS.bold};
    color: ${({ theme }) => theme.COLORS.primary_title};
`;
