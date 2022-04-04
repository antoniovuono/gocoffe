import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { useTheme } from 'styled-components';
import Search from '../../components/Search';
import useCheckout from '../../hooks/useCheckout';
import { IOrders } from '../../interfaces/IOrders';
import MyOrder from './components/MyOrder';

import * as Styled from './styles';

const MyOrders: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [buttoLoading, setButtonLoading] = useState(false);
    const [myOrdersList, setMyOrdersList] = useState<IOrders[]>([]);
    const [loading, setLoading] = useState(false);

    const { getOrders } = useCheckout();
    const theme = useTheme();

    const numberOfOrders = myOrdersList.length >= 2 ? 'orders' : 'order';

    const getYourOrders = async () => {
        setLoading(true);
        try {
            const response = await getOrders();
            setMyOrdersList(response);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Ops!',
                text2: 'Error to load your orders!',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleReloadOrders = async () => {
        setLoading(true);
        try {
            const response = await getOrders();
            setMyOrdersList(response);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Ops!',
                text2: 'Error to load your orders!',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleFilteredOrder = async () => {
        setButtonLoading(true);
        try {
            const response = await getOrders();

            const responseFilter = (element: string) => {
                return element.id === searchValue;
            };
            const filteredOrder = response.filter(responseFilter);
            setMyOrdersList(filteredOrder);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Ops!',
                text2: 'Error to find your order!',
            });
        } finally {
            setButtonLoading(false);
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
                            onPress={handleFilteredOrder}
                            loading={buttoLoading}
                        />
                    </TouchableWithoutFeedback>
                </Styled.SearchSection>
            </Styled.Header>

            <Styled.CounterOrdersContent>
                <Styled.Reload onPress={handleReloadOrders}>
                    <Ionicons
                        name="reload"
                        size={18}
                        color={theme.COLORS.secondary}
                    />
                </Styled.Reload>

                <Styled.CounterOrders>
                    You have {myOrdersList.length} {numberOfOrders}
                </Styled.CounterOrders>
            </Styled.CounterOrdersContent>

            <Styled.MyOrdersContent>
                {loading ? (
                    <Styled.Loader color={theme.COLORS.secondary} />
                ) : (
                    <Styled.OrdersList
                        showsVerticalScrollIndicator={false}
                        data={myOrdersList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            const currentDate = Intl.DateTimeFormat('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit',
                            }).format(new Date(item.date));

                            return (
                                <MyOrder
                                    order_id={item.id}
                                    date={currentDate}
                                    total={item.total_price}
                                />
                            );
                        }}
                    />
                )}
            </Styled.MyOrdersContent>
        </Styled.Container>
    );
};

export default MyOrders;
