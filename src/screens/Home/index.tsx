import React, { useState } from 'react';
import PromoImage from '../../assets/images/banner.png';
import ButtonCarousell from '../../components/ButtonCarousell';
import Search from '../../components/Search';
import * as Styled from './styles';
import ProductComponent from '../../components/ProductComponent/index';

const Home: React.FC = () => {
    const [selectedAll, setSelectedAll] = useState(false);

    const handleClickAllFilter = () => {
        setSelectedAll(!selectedAll);
    };

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
                    onPress={() => {}}
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

            <Styled.ProductsList>
                <ProductComponent />
            </Styled.ProductsList>
        </Styled.Container>
    );
};

export default Home;
