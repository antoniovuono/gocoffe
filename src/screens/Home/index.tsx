import React from 'react';
import Search from '../../components/Search';
import * as Styled from './styles';

const Home: React.FC = () => {
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
        </Styled.Container>
    );
};

export default Home;
