import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from '../src/navigations/Tab';
import {CommunityDetailPage} from './pages/CommunityDetailPage';
import { RoundButton } from './components/RoundButton'
import {EditPage} from "./pages/EditPage";
import {LoginPage} from "./pages/LoginPage";
import {StackNavigation} from "./navigations/SignUpPageStack";



const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    );
};

export default App;
