import React from 'react';

import * as Styled from './styles';

interface IOrdersDetails {
    order_id: string;
    date: string;
    total: number;
}

const MyOrder: React.FC<IOrdersDetails> = ({ order_id, date, total }) => {
    return (
        <Styled.Container>
            <Styled.FirstContent>
                <Styled.OrderId>
                    Order id: <Styled.OrderId orange>{order_id}</Styled.OrderId>{' '}
                </Styled.OrderId>
                <Styled.Date>{date}</Styled.Date>
            </Styled.FirstContent>

            <Styled.OrdersDetails>
                <Styled.Detail>Total price:</Styled.Detail>
                <Styled.Amount>
                    <Styled.Amount dollar>$</Styled.Amount> {total}
                </Styled.Amount>
            </Styled.OrdersDetails>
        </Styled.Container>
    );
};

export default MyOrder;
