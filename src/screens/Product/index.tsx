import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as Styled from './styles';

const Product: React.FC = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.ButtonGoBack
                    hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
                    onPress={handleGoBack}
                >
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color={theme.COLORS.primary_title}
                    />
                </Styled.ButtonGoBack>

                <Styled.HeaderTitle>Cappuccino</Styled.HeaderTitle>

                <Styled.ButtonFavoriteProduct
                    hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
                >
                    <MaterialIcons
                        name="favorite-border"
                        size={24}
                        color={theme.COLORS.primary_title}
                    />
                </Styled.ButtonFavoriteProduct>
            </Styled.Header>

            <Styled.ProductPageContent>
                <Styled.ProductImage
                    source={{
                        uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1647143105/gocoffe/Captura_de_Tela_2022-03-13_a%CC%80s_00.44.56_mioql3.png',
                    }}
                />
            </Styled.ProductPageContent>
        </Styled.Container>
    );
};

export default Product;
