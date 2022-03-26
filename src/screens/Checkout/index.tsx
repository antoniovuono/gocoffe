import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import DoneIcon from '../../assets/icons/done.svg';
import * as Styled from './styles';

const Checkout: React.FC = () => {
    const navigation = useNavigation();
    const theme = useTheme();

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

            <Styled.Deadline>
                <Feather
                    name="clock"
                    size={20}
                    color={theme.COLORS.primary_title}
                />
                <Styled.DeadlineText>
                    Delivery in:{' '}
                    <Styled.DeadlineText orange>
                        {' '}
                        20 minutes{' '}
                    </Styled.DeadlineText>
                </Styled.DeadlineText>
            </Styled.Deadline>

            <Styled.ButtonConfirm onPress={handleConfirm}>
                <Styled.ButtonConfirmTitle>Ok</Styled.ButtonConfirmTitle>
            </Styled.ButtonConfirm>
        </Styled.Container>
    );
};

export default Checkout;
