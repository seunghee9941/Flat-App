import * as React from 'react';
import styled from 'styled-components/native';
import {useLayoutEffect} from "react";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;

const ButtonContainer = styled.TouchableOpacity`

  width: 100%;
  height: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(MaterialCommunityIcons).attrs({
    name: 'camera-plus',
    size: 60,
})`
  color: darkgrey;
`;


const MusicSheetPage = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: '#ffffff',

            headerLeft: ({onPress, tintColor}) => {
                return (
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={30}
                        style={{marginLeft: 11}}
                        color={tintColor}
                        onPress={onPress}
                    />
                );
            },
            headerRight: ({tintColor}) => (
                <AntDesign
                    name="check"
                    size={30}
                    style={{marginRight: 11}}
                    color={tintColor}
                    onPress={() => navigation.navigate("MusicSheetPlayPage")}
                />
            ),
        });
    }, [navigation]);

    return (
        <Container>
            <ButtonContainer>
                <ButtonIcon/>
            </ButtonContainer>
        </Container>
    );
};

export default MusicSheetPage;
