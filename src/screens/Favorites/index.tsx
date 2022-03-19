import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import * as Styled from './styles';
import { FavoritesProducts } from '../../components/FavoritesProducts';

const Favorites: React.FC = () => {
    const theme = useTheme();

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.SectionTitle>Favorited Products</Styled.SectionTitle>

                <MaterialIcons
                    name="favorite-border"
                    size={24}
                    color={theme.COLORS.secondary}
                />
            </Styled.Header>

            <Styled.CounterFavoritesContent>
                <Styled.CoutnerLabel>
                    <MaterialIcons
                        name="favorite-border"
                        size={24}
                        color={theme.COLORS.secondary}
                    />
                    <Styled.CounterTitle>
                        You have 4 favorited products
                    </Styled.CounterTitle>
                </Styled.CoutnerLabel>
            </Styled.CounterFavoritesContent>

            <Styled.ProductsFavoritesContainer>
                <FavoritesProducts />
            </Styled.ProductsFavoritesContainer>
        </Styled.Container>
    );
};

export default Favorites;
