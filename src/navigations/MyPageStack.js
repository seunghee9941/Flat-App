import React from 'react';
import {Button, Text} from "react-native";
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {SettingPage} from "../pages/SettingPage";
import {MyPage} from "../pages/MyPage";

const MyPageStack =createStackNavigator();

const StackNavigation = () => {
    return (
            <MyPageStack.Navigator screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                // gestureDirection: "horizontal-inverted",
                headerStyle:{
                    backgroundColor: '#101010',
                },
            }}>
                <MyPageStack.Screen name="MyPage" component={MyPage} options={{headerShown: false,}}/>
                <MyPageStack.Screen name="Setting" component={SettingPage} options={{headerTitle: '',
                    headerBackTitleVisible: true,
                    headerBackTitle: '취소',
                    headerTintColor: '#ffffff',
                headerRight:()=>(
                    <Button color="#101010" title="확인" onPress={()=>alert('저장되었습니다!')}/>
                    )}}
                />
            </MyPageStack.Navigator>
    );
};
export default StackNavigation;
