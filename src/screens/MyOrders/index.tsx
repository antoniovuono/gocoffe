import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';
import Search from '../../components/Search';
import useCheckout from '../../hooks/useCheckout';
import MyOrder from './components/MyOrder';

import * as Styled from './styles';

const MyOrders: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [buttoLoading, setButtonLoading] = useState(false);
    const [myOrdersList, setMyOrdersList] = useState([]);

    const { getOrders } = useCheckout();

    const getYourOrders = async () => {
        try {
            const response = await getOrders();

            setMyOrdersList(response);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Ops!',
                text2: 'Error to load your orders!',
            });
        }
    };

    useEffect(() => {
        getYourOrders();
    }, []);

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
                <Styled.OrdersList
                    data={myOrdersList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <MyOrder />}
                />
            </Styled.MyOrdersContent>
        </Styled.Container>
    );
};

export default MyOrders;
