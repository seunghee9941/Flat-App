import {createStackNavigator} from "@react-navigation/stack";
import {CommunityDetailPage} from "../pages/CommunityDetailPage";
import React from "react";
import {CommunityPage} from "../pages/CommunityPage";
import TobBar from "../components/TobBar";

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Community" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Community" component={CommunityPage} />
            <Stack.Screen name="CommunityDetail" component={CommunityDetailPage} />
        </Stack.Navigator>
    )
};
