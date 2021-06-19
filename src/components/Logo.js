import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'
import AppLoading from 'expo-app-loading';
import { useFonts, Sriracha_400Regular } from '@expo-google-fonts/sriracha';

const LogoView = styled.View`
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 0 10px;
  flex-direction: row;
`;

const Logo = () => {
    let [fontsLoaded] = useFonts({
        Sriracha_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <LogoView>
            <Text style={{ color:'white', fontSize:30, fontFamily: 'Sriracha_400Regular'}}>flat</Text>
        </LogoView>
    );
};

export default Logo;
