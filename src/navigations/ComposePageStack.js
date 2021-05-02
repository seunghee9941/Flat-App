import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import RecordPage from "../pages/RecordPage";
import {ComposePage} from "../pages/ComposePage";
import {EditPage} from "../pages/EditPage";
import TobBar from "../components/TobBar";
import {Button} from "react-native";
import {BgmPage} from "../pages/BgmPage";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
                backgroundColor: '#101010',
                elevation: 0,
                borderBottomColor: 'white',
                borderBottomWidth: 1
            }
        }}>
        <Stack.Screen name="ComposePage" component={ComposePage} options={{
            headerTitle: <TobBar/>,
            headerTitleAlign: "center",
        }}/>
        <Stack.Screen
            name="RecordPage"
            component={RecordPage}
            options={{
                headerTitle: '',
                headerBackTitleVisible: false,
                headerStyle: {
                    elevation: 0,
                    backgroundColor: '#101010'
                },
                headerTintColor: '#ffffff'
            }}/>
        <Stack.Screen name="EditPage" component={EditPage}/>
        <Stack.Screen name="BgmPage" component={BgmPage}/>
    </Stack.Navigator>
    );
};

export default StackNavigation;
