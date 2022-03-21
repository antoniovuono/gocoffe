import React from 'react';

import * as Styled from './styles';

const ProductCart: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.PhotoContent>
                <Styled.Photo
                    source={{
                        uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1647121470/gocoffe/Captura_de_Tela_2022-03-12_a%CC%80s_18.44.07_d5oewv.png',
                    }}
                />
            </Styled.PhotoContent>

            <Styled.DetailsContent>
                <Styled.TitlesContent>
                    <Styled.ProductTitle>Cappuccino</Styled.ProductTitle>
                    <Styled.ProductSubTitle>
                        With chocolate
                    </Styled.ProductSubTitle>
                </Styled.TitlesContent>

                <Styled.FooterContent>
                    <Styled.Amount>
                        <Styled.Amount amount>$ </Styled.Amount>4.56
                    </Styled.Amount>
                    <Styled.Quantity>
                        Quantity: <Styled.Quantity quantity>3</Styled.Quantity>
                    </Styled.Quantity>
                </Styled.FooterContent>
            </Styled.DetailsContent>
        </Styled.Container>
    );
};

export default ProductCart;
