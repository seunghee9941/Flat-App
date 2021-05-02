import React from 'react';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SmallButton = styled.View`
    padding: 0 10% 0 10%;
    height: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border-width: 1px;
    margin:10px;
`;

const GradientButton = styled(LinearGradient)`
    width: 220px;
    height: 60px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin: 15px;
`;

const LargeButton = styled(GradientButton)`
    width: 218px;
    height: 58px;
    border-radius: 5px;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const RoundButton = ({ state, name, pageName, nav }) => {
    return (
        <>
            {state === 'GRAY_SMALL' &&
            <Pressable onPress={() => nav.navigate(pageName)}>
                {({ pressed }) => (
                    <SmallButton
                        style={[{ backgroundColor: pressed ? '#2E2E2E' : '#101010'}, { borderColor:'#ffffff' }]}>
                        <ButtonText>{name}</ButtonText>
                    </SmallButton>
                )}
            </Pressable>
            }
            {state === 'COLOR_SMALL' &&
            <Pressable onPress={() => nav.navigate(pageName)}>
                {({ pressed }) => (
                    <SmallButton
                        style={[{backgroundColor: pressed ? '#51CDDE' : '#101010'}, { borderColor:'#51CDDE' }]}>
                        <ButtonText style={[{color: pressed ? '#000000' : '#ffffff'}]}>
                            {name}
                        </ButtonText>
                    </SmallButton>
                )}
            </Pressable>
            }
            {state === 'GRAD_LARGE' &&
            <GradientButton start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={ ['#54DE51','#51CDDE'] }>
                <Pressable onPress={() => nav.navigate(pageName)}>
                    {({ pressed }) => (
                        <LargeButton
                            start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                            colors={ pressed ? ['#54DE51','#51CDDE'] : ['#101010','#101010']}
                        >
                            <ButtonText style= {[{ color : pressed ? '#000000' : '#ffffff' }]}>
                                { name }
                            </ButtonText>
                        </LargeButton>
                    )}
                </Pressable>
            </GradientButton>
            }
        </>
    );
};
