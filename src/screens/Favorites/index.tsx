import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import * as Styled from './styles';
import FavoritesProducts from '../../components/FavoritesProducts';

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
                <FavoritesProducts
                    photo="https://res.cloudinary.com/didxdzbfe/image/upload/v1647121470/gocoffe/Captura_de_Tela_2022-03-12_a%CC%80s_18.44.07_d5oewv.png"
                    title="Cappuccino"
                    type="With chocolate"
                    description="Espresso is generally denser than coffee brewed by other
                    methods, having a higher concentration of suspended and
                    dissolved solids; it generally has a creamy foam on top
                    known as crema. Espresso is the base for a number of other
                    coffee drinks, such as latte, cappuccino, macchiato, mocha,
                    and americano."
                    onPress={() => {}}
                />
            </Styled.ProductsFavoritesContainer>
        </Styled.Container>
    );
};

export default Favorites;
