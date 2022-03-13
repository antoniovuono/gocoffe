import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import * as Styled from './styles';

interface ICarousel extends RectButtonProps {
    title: string;
    selected_item?: boolean;
}

const ButtonCarousell: React.FC<ICarousel> = ({
    title,
    selected_item,
    ...rest
}) => {
    return (
        <Styled.ButtonProductType {...rest} selected={selected_item}>
            <Styled.ButtonTitle selected={selected_item}>
                {title}
            </Styled.ButtonTitle>
        </Styled.ButtonProductType>
    );
};

export default ButtonCarousell;
