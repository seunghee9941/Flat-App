import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from '../src/navigations/Tab';
import {CommunityDetailPage} from './pages/CommunityDetailPage';
import { RoundButton } from './components/RoundButton'
import {EffectButton} from "./components/EffectButton";

const Container = styled.View`
  flex: 1;
  background-color: #101010;
  justify-content: center;
  align-items: center;
`;

const App = () => {
    return (
        // <NavigationContainer>
        //     <TabNavigation />
        // </NavigationContainer>
        <Container>
            <RoundButton state="COLOR_SMALL" name="로그인" />
            <RoundButton state="GRAY_SMALL" name="회원가입" />
            <RoundButton state="COLOR_SMALL" name="가입하기" />
            <RoundButton state="GRAD_LARGE" name="작곡하기" />
            <RoundButton state="GRAD_LARGE" name="편집하기" />
            <RoundButton state="GRAD_LARGE" name="무료 BGM" />
            <EffectButton effect="genre" name="BALLAD" />
        </Container>
    );
};

export default App;
