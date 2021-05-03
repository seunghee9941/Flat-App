import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import RecordPage from "../pages/RecordPage";
import {ComposePage} from "../pages/ComposePage";
import {EditPage} from "../pages/EditPage";
import TobBar from "../components/TopBar";
import {BgmPage} from "../pages/BgmPage";
import EditSavePage from "../pages/EditSavePage";

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
            <Stack.Screen name="EditPage"
                          component={EditPage}
                          options={{
                              headerTitle: '',
                              headerBackTitleVisible: false,
                              headerStyle: {
                                  elevation: 0,
                                  backgroundColor: '#101010'
                              },
                              headerTintColor: '#ffffff'
                          }}/>
            <Stack.Screen name="BgmPage" component={BgmPage} options={{
                headerTitle: <TobBar/>,
                headerTitleAlign: "center",
            }}/>
            <Stack.Screen name="EditSavePage" component={EditSavePage}
                          options={{
                              headerTitle: '',
                              headerBackTitleVisible: false,
                              headerStyle: {
                                  elevation: 0,
                                  backgroundColor: '#101010'
                              },
                              headerTintColor: '#ffffff'
                          }}/>
        </Stack.Navigator>
    );
};

export default StackNavigation;
