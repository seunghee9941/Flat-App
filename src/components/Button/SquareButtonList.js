import React, { useState } from 'react';
import styled from 'styled-components/native';
import {Dimensions, Pressable, View} from "react-native";

const ButtonWrapper = styled.View`
    flex: 1;
    margin: 0.5px;
    flex-direction: row;
    justify-content: space-between;
`;

const ButtonContainer = styled.View`
    width: ${Dimensions.get('window').width/3-1}px;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isClicked ? '#2E2E2E' : '#101010'};
`;

const EffectText = styled.Text`
    font-size: 20px;
    color: #ffffff;
`;

export const SquareButtonList = ({ effects }) => {
    const [clickedID, setClickedID] = useState(-1);
    const first = effects.slice(0,3);
    const second = effects.slice(3,6);

    return(
        <View>
            <ButtonWrapper style={[{alignItems: 'flex-start'}]}>
                {first.map((name, i) => (
                    <Pressable
                        key={i}
                        onPressOut={()=> {
                            clickedID === i ? setClickedID(-1): setClickedID(i);
                        }}
                    >
                        <ButtonContainer isClicked={i === clickedID}>
                            <EffectText>{name}</EffectText>
                        </ButtonContainer>
                    </Pressable>
                ))}
            </ButtonWrapper>
            <ButtonWrapper style={[{alignItems: 'flex-end'}]}>
                {second.map((name, i) => (
                    <Pressable
                        key={i+3}
                        onPressOut={()=> {clickedID === i+3 ? setClickedID(-1): setClickedID(i+3);}}
                    >
                        <ButtonContainer isClicked={i+3 === clickedID}>
                            <EffectText>{name}</EffectText>
                        </ButtonContainer>
                    </Pressable>
                ))}
            </ButtonWrapper>
        </View>
    );
};
