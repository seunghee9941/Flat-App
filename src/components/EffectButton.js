import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Pressable, Dimensions } from 'react-native';

const ButtonContainer = styled.View`
    width:${Dimensions.get('screen').width/3-1}px;
    height:${Dimensions.get('screen').height/2-1}px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    background-color: ${props => props.isClicked ? '#51CDDE' : '#101010'};
    border-color: ${props => props.isClicked ? '#51CDDE' : '#ffffff'}
`;

const EffectText = styled.Text`
    font-size: 20px;
    color: ${props => props.isClicked ? '#000000' : '#ffffff'};
`;

export const EffectButton = ({ effect, name }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <Pressable onPressOut = {() => setClicked(!clicked)}>
            <ButtonContainer isClicked={clicked}>
                <EffectText isClicked={clicked}>
                    { name }
                </EffectText>
            </ButtonContainer>
        </Pressable>
    );
};
