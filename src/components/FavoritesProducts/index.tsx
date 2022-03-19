import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as Styled from './styles';

export function FavoritesProducts() {
    const theme = useTheme();
    return (
        <Styled.Container>
            <Styled.ProductPhotoContent>
                <Styled.ProductPhoto
                    source={{
                        uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1647121470/gocoffe/Captura_de_Tela_2022-03-12_a%CC%80s_18.44.07_d5oewv.png',
                    }}
                />
            </Styled.ProductPhotoContent>

            <Styled.DetailsContent>
                <Styled.ProductTitle>Cappuccino</Styled.ProductTitle>
                <Styled.ProductType>With chocolate</Styled.ProductType>
                <Styled.Description numberOfLines={3}>
                    Espresso is generally denser than coffee brewed by other
                    methods, having a higher concentration of suspended and
                    dissolved solids; it generally has a creamy foam on top
                    known as crema. Espresso is the base for a number of other
                    coffee drinks, such as latte, cappuccino, macchiato, mocha,
                    and americano.
                </Styled.Description>
            </Styled.DetailsContent>

            <Styled.DeleteButtonContent>
                <Styled.DeleteButton>
                    <AntDesign
                        name="delete"
                        size={24}
                        color={theme.COLORS.secondary}
                    />
                </Styled.DeleteButton>
            </Styled.DeleteButtonContent>
        </Styled.Container>
    );
}
