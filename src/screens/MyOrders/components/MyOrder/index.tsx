import React from 'react';

import * as Styled from './styles';

const MyOrder: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.FirstContent>
                <Styled.OrderId>
                    Order id: <Styled.OrderId orange>376161265</Styled.OrderId>{' '}
                </Styled.OrderId>
                <Styled.Date>29/09/2022</Styled.Date>
            </Styled.FirstContent>

            <Styled.OrdersDetails>
                <Styled.Detail>1x Capuccino with chocolate </Styled.Detail>
                <Styled.Amount>
                    <Styled.Amount dollar>$</Styled.Amount> 4.90
                </Styled.Amount>
            </Styled.OrdersDetails>
            <Styled.OrdersDetails>
                <Styled.Detail>1x Capuccino with chocolate </Styled.Detail>
                <Styled.Amount>
                    <Styled.Amount dollar>$</Styled.Amount> 4.90
                </Styled.Amount>
            </Styled.OrdersDetails>
            <Styled.OrdersDetails>
                <Styled.Detail>1x Capuccino with chocolate </Styled.Detail>
                <Styled.Amount>
                    <Styled.Amount dollar>$</Styled.Amount> 4.90
                </Styled.Amount>
            </Styled.OrdersDetails>
        </Styled.Container>
    );
};

export default MyOrder;
