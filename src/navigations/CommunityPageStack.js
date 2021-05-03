import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {CommunityDetailPage} from "../pages/CommunityDetailPage";
import React from "react";
import {CommunityPage} from "../pages/CommunityPage";
import TobBar from "../components/TopBar";

const Stack = createStackNavigator();

export const CommunityStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Community" screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
                backgroundColor: '#101010',
                elevation: 0,
                borderBottomColor: 'white',
                borderBottomWidth: 1
            }
        }}>
            <Stack.Screen name="Community" component={CommunityPage} options={{
                headerTitle : <TobBar/>,
                headerTitleAlign: "center",
            }}/>
            <Stack.Screen name="CommunityDetail" component={CommunityDetailPage} options={{
                headerTitle : <TobBar/>,
                headerTitleAlign: "center",
            }}/>
        </Stack.Navigator>
    )
};
