import React from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styles';

const Search: React.FC = () => {
    const theme = useTheme();

    return (
        <Styled.Container>
            <Styled.SearchInput
                returnKeyType="search"
                placeholder="Find your coffee"
                placeholderTextColor={theme.COLORS.secondary_title}
                numberOfLines={1}
                maxLength={26}
            />
            <Styled.SearchButton>
                <Styled.ButtonTitle>Search</Styled.ButtonTitle>
            </Styled.SearchButton>
        </Styled.Container>
    );
};

export default Search;
