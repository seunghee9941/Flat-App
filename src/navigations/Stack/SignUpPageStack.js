import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {SignUpPage} from "../../pages/SignUpPage";
import {LoginPage} from "../../pages/LoginPage";
import TabNavigation from "../BottomTab";

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginPage"
            screenOptions={{headerShown:false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen name="HomeTab" component={TabNavigation} />
        </Stack.Navigator>
    )
};
