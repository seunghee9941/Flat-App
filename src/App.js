import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from '../src/navigations/Tab';
import {CommunityDetailPage} from './pages/CommunityDetailPage';
import { RoundButton } from './components/RoundButton'
import {EditPage} from "./pages/EditPage";
import {LoginPage} from "./pages/LoginPage";

const Container = styled.View`
  flex: 1;
  background-color: #101010;
  justify-content: center;
  align-items: center;
`;

const App = () => {
    return (
        <Container>
            <LoginPage/>
        </Container>
        // <NavigationContainer>
        //     <TabNavigation />
        // </NavigationContainer>
    );
};

export default App;
