import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import RecordPage from "../pages/RecordPage";
import {ComposePage} from "../pages/ComposePage";
import {EditPage} from "../pages/EditPage";
import TopBar from "../components/TopBar";
import EditSavePage from "../pages/EditSavePage";
import MusicSheetPage from "../pages/MusicSheetPage";

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
                headerTitle: <TopBar/>,
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
            <Stack.Screen name="MusicSheetPage"
                          component={MusicSheetPage}
                          options={{
                              headerTitle: '',
                              headerBackTitleVisible: false,
                              headerStyle: {
                                  elevation: 0,
                                  backgroundColor: '#101010'
                              },
                              headerTintColor: '#ffffff'
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
