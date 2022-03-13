import React, { useEffect, useState } from 'react';
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
    const [selectedAll, setSelectedAll] = useState(false);

    const { getProductsDetails } = useProducts();

    const handleClickAllFilter = () => {
        setSelectedAll(!selectedAll);
    };

    const fetchProducts = async () => {
        try {
            const response = await getProductsDetails();
            setProducts(response);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro ao carregar produtos',
                text2: 'Nāo foi possível carregar os produtos!',
            });
        }
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
                <Search
                    placeholder="Find your coffee"
                    button_title="Search"
                    onPress={() => {
                        Toast.show({
                            type: 'success',
                            text1: 'Sucesso',
                            text2: 'pesquisa feita com sucesso',
                        });
                    }}
                />
            </Styled.SearchSection>

            <Styled.PromotionContent>
                <Styled.PromotionTitle>Promo For You</Styled.PromotionTitle>

                <Styled.PromoImage source={PromoImage} />
            </Styled.PromotionContent>

            <Styled.FilterButtons>
                <ButtonCarousell
                    title="All"
                    onPress={handleClickAllFilter}
                    selected_item={selectedAll}
                />
                <ButtonCarousell title="Espresso" />
                <ButtonCarousell title="Romano" />
                <ButtonCarousell title="Latte" />
            </Styled.FilterButtons>

            <Styled.ProductsListContent>
                <Styled.ProductsList
                    data={products}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ProductComponent
                            product_image="https://res.cloudinary.com/didxdzbfe/image/upload/v1647142581/gocoffe/Captura_de_Tela_2022-03-13_a%CC%80s_00.36.13_x71wfn.png"
                            product_review={4.3}
                            product_name="Cappuccino"
                            product_detail="With chocolate"
                            product_price={4.65}
                            onAddToCart={() => {}}
                        />
                    )}
                />
            </Styled.ProductsListContent>
        </Styled.Container>
    );
};

export default Home;
