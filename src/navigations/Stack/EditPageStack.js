import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {EditPage} from "../../pages/EditPage";
import Logo from "../../components/Logo";
import EditSavePage from "../../pages/EditSavePage";
import {EditListPage} from "../../pages/EditListPage";

const Stack = createStackNavigator();

const EditStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
                backgroundColor: '#101010',
                elevation: 0,
                borderBottomColor: '#8E8E8E',
                borderBottomWidth: 1
            }
        }}>
            <Stack.Screen name="EditListPage" component={EditListPage} options={{
                headerTitle: <Logo/>,
                headerTitleAlign: "center",
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
            <Stack.Screen name="EditSavePage"
                          component={EditSavePage}
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

export default EditStackNavigation;
