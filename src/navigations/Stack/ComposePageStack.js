import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import RecordPage from "../../pages/RecordPage";
import {ComposePage} from "../../pages/ComposePage";
import {EditPage} from "../../pages/EditPage";
import Logo from "../../components/Logo";
import EditSavePage from "../../pages/EditSavePage";
import SheetUploadPage from "../../pages/SheetUploadPage";
import {MusicSheetPlayPage} from "../../pages/MusicSheetPlayPage";

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
                headerTitle: <Logo/>,
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
            <Stack.Screen name="SheetUploadPage"
                          component={SheetUploadPage}
                          options={{
                              headerTitle: '',
                              headerBackTitleVisible: false,
                              headerStyle: {
                                  elevation: 0,
                                  backgroundColor: '#101010'
                              },
                              headerTintColor: '#ffffff'
                          }}/>
            <Stack.Screen name="MusicSheetPlayPage"
                          component={MusicSheetPlayPage}
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
