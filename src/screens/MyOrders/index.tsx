import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import Search from '../../components/Search';
import MyOrder from './components/MyOrder';

import * as Styled from './styles';

const MyOrders: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [buttoLoading, setButtonLoading] = useState(false);

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.SubTitle>Find yours orders</Styled.SubTitle>
                <Styled.Title>My orders</Styled.Title>

                <Styled.SearchSection>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Search
                            placeholder="Find your coffee"
                            button_title="Search"
                            input_value={setSearchValue}
                            onPress={() => {}}
                            loading={buttoLoading}
                        />
                    </TouchableWithoutFeedback>
                </Styled.SearchSection>
            </Styled.Header>

            <Styled.CounterOrdersContent>
                <Styled.CounterOrders>You have 3 orders</Styled.CounterOrders>
            </Styled.CounterOrdersContent>

            <Styled.MyOrdersContent>
                <MyOrder />
            </Styled.MyOrdersContent>
        </Styled.Container>
    );
};

export default MyOrders;
