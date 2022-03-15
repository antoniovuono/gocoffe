import React from 'react';

import * as Styled from './styles';

interface IButton {
    title: string;
    selected_button: boolean;
    onPress: () => void;
}

const SizeButtons: React.FC<IButton> = ({
    title,
    selected_button,
    ...rest
}) => {
    return (
        <Styled.SizeButton selected={selected_button} {...rest}>
            <Styled.SizeButtonTitle>{title}</Styled.SizeButtonTitle>
        </Styled.SizeButton>
    );
};

export default SizeButtons;
