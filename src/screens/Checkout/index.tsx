import React from 'react';
import { useNavigation } from '@react-navigation/native';
import DoneIcon from '../../assets/icons/done.svg';
import * as Styled from './styles';

const Checkout: React.FC = () => {
    const navigation = useNavigation();

    const handleConfirm = () => {
        navigation.navigate('Home');
    };

    return (
        <Styled.Container>
            <DoneIcon style={{ marginBottom: 40 }} />
            <Styled.CheckoutTitle>Order finalized!</Styled.CheckoutTitle>
            <Styled.CheckoutDescription>
                Go to the cashier to make your payment and pick up your order.
            </Styled.CheckoutDescription>

            <Styled.ButtonConfirm onPress={handleConfirm}>
                <Styled.ButtonConfirmTitle>Ok</Styled.ButtonConfirmTitle>
            </Styled.ButtonConfirm>
        </Styled.Container>
    );
};

export default Checkout;
