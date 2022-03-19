import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import Toast from 'react-native-toast-message';
import * as Styled from './styles';
import FavoritesProducts from '../../components/FavoritesProducts';
import useProducts from '../../hooks/useProducts';
import { IProducts } from '../../interfaces/IProducts';

const Favorites: React.FC = () => {
    const [favoriteds, setFavoriteds] = useState<IProducts[]>([]);
    const [loading, setLoading] = useState(false);

    const theme = useTheme();
    const { getFavoritedProducts, removeFavorite } = useProducts();

    const getFavoritedProduct = async () => {
        setLoading(true);
        try {
            const response = await getFavoritedProducts();
            setFavoriteds(response);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Ops!',
                text2: 'Error to load favorites!',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFavorite = async (id: string) => {
        try {
            await removeFavorite(id);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Ops!',
                text2: 'Error to remove favorites!',
            });
        }
    };

    useEffect(() => {
        getFavoritedProduct();
    }, []);

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
                        You have {favoriteds.length} favorite products
                    </Styled.CounterTitle>
                </Styled.CoutnerLabel>
            </Styled.CounterFavoritesContent>

            <Styled.ProductsFavoritesContainer>
                {loading ? (
                    <Styled.Loader color={theme.COLORS.secondary} />
                ) : (
                    <Styled.FavoritedsList
                        showsVerticalScrollIndicator={false}
                        data={favoriteds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <FavoritesProducts
                                photo={item.photo}
                                title={item.name}
                                type={item.type}
                                description={item.description}
                                onPress={() => handleRemoveFavorite(item.id)}
                            />
                        )}
                    />
                )}
            </Styled.ProductsFavoritesContainer>
        </Styled.Container>
    );
};

export default Favorites;
