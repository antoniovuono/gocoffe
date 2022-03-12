import React from 'react';
import Search from '../../components/Search';
import * as Styled from './styles';

const Home: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.WelcomeTitle>Welcome Antonio,</Styled.WelcomeTitle>
                <Styled.Title>Find the best coffe </Styled.Title>
                <Styled.Title>for your day</Styled.Title>
            </Styled.Header>

            <Styled.SearchSection>
                <Search />
            </Styled.SearchSection>
        </Styled.Container>
    );
};

export default Home;
