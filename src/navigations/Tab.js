import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {HomePage} from "../pages/HomePage";
import {BgmPage} from "../pages/BgmPage";
import {ComposePage} from "../pages/ComposePage";
import {CommunityPage} from "../pages/CommunityPage";
import {CommunityDetailPage} from "../pages/CommunityDetailPage";
import {MyPage} from "../pages/MyPage";
import {EditPage} from "../pages/EditPage";
import RecordPage from "../pages/RecordPage";
import MyPageStack from "./MyPageStack";
import {SignUpPage} from "../pages/SignUpPage";
import {StackNavigation} from "./CommunityStack";
import Stack from "./MyPageStack";

const TabIcon = ({name, size, color})=> {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
const TabIcon2 = ({name, size, color})=> {
    return <Ionicons name={name} size={size} color={color} />;
};
const Tab =createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Settings"
           tabBarOptions={{
               keyboardHidesTabBar: true,
               style:{
                   position: 'absolute',
                   backgroundColor: '#101010',
                   borderTopColor: '#8E8E8E',
                   borderTopWidth: 1,
               },
               activeTintColor: '#FFFFFF',
           }}
        >
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'home':'home-outline',}),
                tabBarLabel: '홈'
            }}/>
            {/*<Tab.Screen name="BgmPage" component={BgmPage} options={{*/}
            {/*    tabBarIcon: props=> TabIcon2({...props, name: props.focused? 'musical-notes':'musical-notes-outline',}),*/}
            {/*    tabBarLabel: '무료 BGM'*/}
            {/*}}/>*/}
            <Tab.Screen name="BgmPage" component={SignUpPage} options={{
                tabBarIcon: props=> TabIcon2({...props, name: props.focused? 'musical-notes':'musical-notes-outline',}),
                tabBarLabel: '무료 BGM'
            }}/>
            {/*실험중.. 나중에 ComposePage로 바꿔야함!*/}
            <Tab.Screen name="작곡" component={EditPage} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'plus-circle':'plus-circle-outline',}),
            }}/>
            <Tab.Screen name="CommunityPage" component={StackNavigation} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'comment-processing':'comment-outline',}),
                tabBarLabel: '커뮤니티'
            }}/>
            <Tab.Screen name="MyPage" component={MyPageStack} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'account':'account-outline',}),
                tabBarLabel: '마이페이지'
            }}/>
        </Tab.Navigator>
    );
};
export default TabNavigation;
