import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import PromoImage from '../../assets/images/banner.png';
import ButtonCarousell from '../../components/ButtonCarousell';
import Search from '../../components/Search';
import * as Styled from './styles';
import ProductComponent from '../../components/ProductComponent/index';
import useProducts from '../../hooks/useProducts';
import { IProducts } from '../../interfaces/IProducts';

const Home: React.FC = () => {
    const [products, setProducts] = useState<IProducts[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);

    const { getProductsDetails } = useProducts();
    const navigation = useNavigation();

    const handleSearchByProducts = () => {
        setButtonLoading(true);

        const filteredByDetail = (element: IProducts) => {
            return element.type === searchValue;
        };

        const searchResult = products.filter(filteredByDetail);

        if (searchResult.length >= 1) {
            Toast.show({
                type: 'success',
                text1: 'Sucess',
                text2: 'Search performed successfully.',
            });
            setProducts(searchResult);
            setSearchValue('');
        } else {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'No products found...',
            });
        }
        setButtonLoading(false);
    };

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await getProductsDetails();
            setProducts(response);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'Error to load products.',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSearchByEspresso = async () => {
        setLoading(true);
        try {
            const response = await getProductsDetails();

            const filterByEspresso = (element: IProducts) => {
                return element.name === 'Espresso';
            };

            const filteredByEspresso = response.filter(filterByEspresso);

            setProducts(filteredByEspresso);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'Error to load products.',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSearchByCappuccino = async () => {
        setLoading(true);
        try {
            const response = await getProductsDetails();

            const filterByCappuccino = (element: IProducts) => {
                return element.name === 'Cappuccino';
            };

            const filteredByCappuccino = response.filter(filterByCappuccino);

            setProducts(filteredByCappuccino);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'Error to load products.',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSearchByAmerican = async () => {
        setLoading(true);
        try {
            const response = await getProductsDetails();

            const filterByAmerican = (element: IProducts) => {
                return element.name === 'American';
            };

            const filteredByAmerican = response.filter(filterByAmerican);

            setProducts(filteredByAmerican);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Opps!',
                text2: 'Error to load products.',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = async () => {
        Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: 'Product added to the cart',
        });
    };

    const handleGoToProductPage = (products_data: IProducts) => {
        navigation.navigate('ProductPage', { products_data });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.DetailsContent>
                    <Styled.WelcomeTitle>Welcome Antonio,</Styled.WelcomeTitle>
                    <Styled.Title>Find the best coffee </Styled.Title>
                    <Styled.Title>for your day</Styled.Title>
                </Styled.DetailsContent>

                <Styled.ProfileContent>
                    <Styled.PhotoProfile
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/7297243?s=400&v=4',
                        }}
                        resizeMode="contain"
                    />
                    <Styled.SignOutButton
                        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                        onPress={() => {}}
                    >
                        <Styled.SignOut>Sign out</Styled.SignOut>
                    </Styled.SignOutButton>
                </Styled.ProfileContent>
            </Styled.Header>

            <Styled.SearchSection>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Search
                        placeholder="Find your coffee"
                        button_title="Search"
                        input_value={setSearchValue}
                        onPress={handleSearchByProducts}
                        loading={buttonLoading}
                    />
                </TouchableWithoutFeedback>
            </Styled.SearchSection>

            <Styled.PromotionContent>
                <Styled.PromotionTitle>Promo For You</Styled.PromotionTitle>

                <Styled.PromoImage source={PromoImage} />
            </Styled.PromotionContent>

            <Styled.FilterButtons>
                <ButtonCarousell title="All" onPress={fetchProducts} />
                <ButtonCarousell
                    title="Espresso"
                    onPress={handleSearchByEspresso}
                />
                <ButtonCarousell
                    title="Cappuccino"
                    onPress={handleSearchByCappuccino}
                />
                <ButtonCarousell
                    title="American"
                    onPress={handleSearchByAmerican}
                />
            </Styled.FilterButtons>

            <Styled.ProductsListContent>
                {loading ? (
                    <Styled.Loader />
                ) : (
                    <Styled.ProductsList
                        data={products}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ProductComponent
                                onPress={() => handleGoToProductPage(item)}
                                product_image={
                                    item.photo ||
                                    'https://res.cloudinary.com/didxdzbfe/image/upload/v1647142581/gocoffe/Captura_de_Tela_2022-03-13_a%CC%80s_00.36.13_x71wfn.png'
                                }
                                product_review={item.rating || 0}
                                product_name={item.name || 'Coffee'}
                                product_detail={item.type || 'Traditional'}
                                product_price={item.price_large}
                                onAddToCart={handleAddToCart}
                            />
                        )}
                    />
                )}
            </Styled.ProductsListContent>
        </Styled.Container>
    );
};

export default Home;
