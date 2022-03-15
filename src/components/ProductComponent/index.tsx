import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import StarIcon from '../../assets/icons/star.svg';
import AddIcon from '../../assets/icons/plus.svg';
import * as Styled from './styles';

interface IProductComponent extends RectButtonProps {
    product_image: string;
    product_review: number;
    product_name: string;
    product_detail: string;
    product_price: number;
    onAddToCart: () => void;
}

const ProductComponent: React.FC<IProductComponent> = ({
    product_image,
    product_review,
    product_name,
    product_detail,
    product_price,
    onAddToCart,
    ...rest
}) => {
    return (
        <Styled.Container>
            <Styled.ImageContent {...rest}>
                <Styled.ProductImage
                    source={{
                        uri: product_image,
                    }}
                />
                <Styled.ProductReviewContent>
                    <StarIcon width={15} height={15} />
                    <Styled.ProductReview>
                        {product_review}
                    </Styled.ProductReview>
                </Styled.ProductReviewContent>
            </Styled.ImageContent>

            <Styled.DetailsContent>
                <Styled.ProductName>{product_name}</Styled.ProductName>
                <Styled.ProductDetail>{product_detail}</Styled.ProductDetail>
                <Styled.ProductPrice>
                    <Styled.ProductPrice dollar>R$ </Styled.ProductPrice>
                    {product_price}
                </Styled.ProductPrice>

                <Styled.AddToCard
                    hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
                    onPress={onAddToCart}
                >
                    <AddIcon />
                </Styled.AddToCard>
            </Styled.DetailsContent>
        </Styled.Container>
    );
};

export default ProductComponent;
