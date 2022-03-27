import React from 'react';

import * as Styled from './styles';

const MyOrders: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.SubTitle>Find yours orders</Styled.SubTitle>
                <Styled.Title>My orders</Styled.Title>
            </Styled.Header>
        </Styled.Container>
    );
};

export default MyOrders;
