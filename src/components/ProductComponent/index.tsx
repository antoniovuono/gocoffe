import React from 'react';
import StarIcon from '../../assets/icons/star.svg';
import AddIcon from '../../assets/icons/plus.svg';
import * as Styled from './styles';

const ProductComponent: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.ImageContent>
                <Styled.ProductImage
                    source={{
                        uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1647142581/gocoffe/Captura_de_Tela_2022-03-13_a%CC%80s_00.36.13_x71wfn.png',
                    }}
                />
                <Styled.ProductReviewContent>
                    <StarIcon width={15} height={15} />
                    <Styled.ProductReview>4.5</Styled.ProductReview>
                </Styled.ProductReviewContent>
            </Styled.ImageContent>

            <Styled.DetailsContent>
                <Styled.ProductName>Cappuccino</Styled.ProductName>
                <Styled.ProductDetail>With chocolate</Styled.ProductDetail>
                <Styled.ProductPrice>
                    <Styled.ProductPrice dollar>R$</Styled.ProductPrice> 5.60
                </Styled.ProductPrice>

                <Styled.AddToCard>
                    <AddIcon />
                </Styled.AddToCard>
            </Styled.DetailsContent>
        </Styled.Container>
    );
};

export default ProductComponent;
