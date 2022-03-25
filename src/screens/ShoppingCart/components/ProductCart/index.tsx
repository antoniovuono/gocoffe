import React from 'react';

import * as Styled from './styles';

interface ICartProducts {
    photo: string;
    title: string;
    type: string;
    price: number;
    quantity: number;
    onDeletePress: () => void;
}

const ProductCart: React.FC<ICartProducts> = ({
    photo,
    title,
    type,
    price,
    quantity,
    onDeletePress,
}) => {
    return (
        <Styled.Container onLongPress={onDeletePress}>
            <Styled.PhotoContent>
                <Styled.Photo
                    source={{
                        uri: photo,
                    }}
                />
            </Styled.PhotoContent>

            <Styled.DetailsContent>
                <Styled.TitlesContent>
                    <Styled.ProductTitle>{title}</Styled.ProductTitle>
                    <Styled.ProductSubTitle>{type}</Styled.ProductSubTitle>
                </Styled.TitlesContent>

                <Styled.FooterContent>
                    <Styled.Amount>
                        <Styled.Amount amount>$ </Styled.Amount>
                        {price}
                    </Styled.Amount>
                    <Styled.Quantity>
                        Quantity:{' '}
                        <Styled.Quantity quantity>{quantity}</Styled.Quantity>
                    </Styled.Quantity>
                </Styled.FooterContent>
            </Styled.DetailsContent>
        </Styled.Container>
    );
};

export default ProductCart;
