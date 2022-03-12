import React from 'react';
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';
import SearchIcon from '../../assets/icons/search.svg';
import * as Styled from './styles';

interface ISearch extends RectButtonProps {
    placeholder: string;
    button_title: string;
}

const Search: React.FC<ISearch> = ({ placeholder, button_title, ...rest }) => {
    const theme = useTheme();
    return (
        <Styled.Container>
            <Styled.InputContent>
                <SearchIcon width={20} height={20} />
                <Styled.SearchInput
                    returnKeyType="search"
                    placeholder={placeholder}
                    placeholderTextColor={theme.COLORS.secondary_title}
                    numberOfLines={1}
                    maxLength={24}
                />
            </Styled.InputContent>

            <Styled.SearchButton {...rest}>
                <Styled.ButtonTitle>{button_title}</Styled.ButtonTitle>
            </Styled.SearchButton>
        </Styled.Container>
    );
};

export default Search;
