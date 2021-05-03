import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {HomePage} from "../pages/HomePage";
import React from "react";
import {CommunityDetailPage} from "../pages/CommunityDetailPage";
import TopBar from "../components/TopBar";

const Stack = createStackNavigator();

export const HomeStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerStyle: {
                    backgroundColor: '#101010',
                    elevation: 0,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1
                }
            }}>
            <Stack.Screen name="Home" component={HomePage} options={{
                headerTitle: <TopBar/>,
                headerTitleAlign: "center",
            }}/>
            <Stack.Screen name="CommunityDetail" component={CommunityDetailPage} options={{
                headerTitle: <TopBar/>,
                headerTitleAlign: "center",
            }}/>
        </Stack.Navigator>
    )
};
