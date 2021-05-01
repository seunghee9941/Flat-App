import React, { useState } from 'react';
import styled from 'styled-components/native';
import {Dimensions, Pressable} from "react-native";

const Container = styled.View`
    flex: 1;
    margin: 0.5px;
    flex-direction: row;
    justify-content: space-between;
`;

const EffectButton = styled.View`
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

export const EffectButtons = ({ effects }) => {
    const [clickedID, setClickedID] = useState(-1);
    const first = effects.slice(0,3);
    const second = effects.slice(3,6);

    return(
        <>
            <Container style={[{alignItems: 'flex-start'}]}>
                {first.map((name, i) => (
                    <Pressable
                        key={i}
                        onPressOut={()=> {
                            clickedID === i ? setClickedID(-1): setClickedID(i);
                        }}
                    >
                        <EffectButton isClicked={i === clickedID}>
                            <EffectText>{name}</EffectText>
                        </EffectButton>
                    </Pressable>
                ))}
            </Container>
            <Container style={[{alignItems: 'flex-end'}]}>
                {second.map((name, i) => (
                    <Pressable
                        key={i+3}
                        onPressOut={()=> {clickedID === i+3 ? setClickedID(-1): setClickedID(i+3);}}
                    >
                        <EffectButton isClicked={i+3 === clickedID}>
                            <EffectText>{name}</EffectText>
                        </EffectButton>
                    </Pressable>
                ))}
            </Container>
        </>
    );
};
