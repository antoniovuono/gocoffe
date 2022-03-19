import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as Styled from './styles';

interface IFavoriteComponent {
    photo: string;
    title: string;
    type: string;
    description: string;
    loading: boolean;
    onPress: () => void;
}

const FavoritesProducts: React.FC<IFavoriteComponent> = ({
    photo,
    title,
    type,
    description,
    loading,
    ...rest
}) => {
    const theme = useTheme();
    return (
        <Styled.Container>
            <Styled.ProductPhotoContent>
                <Styled.ProductPhoto
                    source={{
                        uri: photo,
                    }}
                />
            </Styled.ProductPhotoContent>

            <Styled.DetailsContent>
                <Styled.ProductTitle>{title}</Styled.ProductTitle>
                <Styled.ProductType>{type}</Styled.ProductType>
                <Styled.Description numberOfLines={3}>
                    {description}
                </Styled.Description>
            </Styled.DetailsContent>

            <Styled.DeleteButtonContent>
                <Styled.DeleteButton {...rest}>
                    {loading ? (
                        <Styled.Loader />
                    ) : (
                        <AntDesign
                            name="delete"
                            size={24}
                            color={theme.COLORS.secondary}
                        />
                    )}
                </Styled.DeleteButton>
            </Styled.DeleteButtonContent>
        </Styled.Container>
    );
};

export default FavoritesProducts;
