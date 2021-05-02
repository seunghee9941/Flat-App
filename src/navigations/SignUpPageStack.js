import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {SignUpPage} from "../pages/SignUpPage";
import {LoginPage} from "../pages/LoginPage";

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
        </Stack.Navigator>
    )
};
