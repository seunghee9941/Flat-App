import React from 'react';
import {Button} from "react-native";
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {ProfileEditPage} from "../../pages/ProfileEditPage";
import {ProfilePage} from "../../pages/ProfilePage";
import Logo from "../../components/Logo";

const MyPageStack =createStackNavigator();

const StackNavigation = () => {
    return (
            <MyPageStack.Navigator screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                // gestureDirection: "horizontal-inverted",
                headerStyle:{
                    backgroundColor: '#101010',
                    elevation: 0,
                    borderBottomColor:'#8E8E8E',
                    borderBottomWidth: 1
                }
            }}>
                <MyPageStack.Screen
                    name="MyPage"
                    component={ProfilePage}
                    options={{
                        headerTitle : <Logo/>,
                        headerTitleAlign: "center",
                    }}
                />
                <MyPageStack.Screen name="Setting" component={ProfileEditPage} options={{headerTitle: '',
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
