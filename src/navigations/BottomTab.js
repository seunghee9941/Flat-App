import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import MyPageStack from "./Stack/MyPageStack";
import {CommunityStackNavigation} from "./Stack/CommunityPageStack";
import {PlayListStackNavigation} from "./Stack/PlayListPageStack";
import ComposePageStack from "./Stack/ComposePageStack";
import {EditListPage} from "../pages/EditListPage";
import { AntDesign } from '@expo/vector-icons';
import styled from "styled-components/native";

const IconView = styled.View`
    border-radius: 50px;
    border: ${props => props.center ? `white 1px` : `none`};
    background-color: ${props => props.center ? props.color : `#101010`};
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80%;
`;

const IconLabel = styled.Text`
    color: white;
    font-size: 10px;
`;

const TabIcon = ({name, color, text, focused, center})=> {
    return (
      <IconView center={center} color={focused ? 'white' : 'black'}>
          {center ? <AntDesign name="plus" size={24} color={focused ? 'black' : 'white'} />
            :
            <><MaterialCommunityIcons name={name} color={color} size={24}/>
                <IconLabel>{text}</IconLabel></>}
      </IconView>
    );
};

TabIcon.defaltProps = {
    center: false,
}

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <BottomTab.Navigator initialRouteName="ComposePage"
                             tabBarOptions={{
               keyboardHidesTabBar: true,
               style:{
                   backgroundColor: '#101010',
                   borderTopColor: '#8E8E8E',
                   borderTopWidth: 1,
               },
               activeTintColor: '#FFFFFF',
               showLabel: false
           }}
        >
            <BottomTab.Screen name="PlayListPage" component={PlayListStackNavigation} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'music-box-multiple':'music-box-multiple-outline', text: '보관함', focused: props.focused}),
            }}/>
            <BottomTab.Screen name="BgmPage" component={EditListPage} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'file-document-edit':'file-document-edit-outline', text: '편곡', focused: props.focused}),
            }}/>
            <BottomTab.Screen name="ComposePage" component={ComposePageStack} options={{
                tabBarIcon: props=> TabIcon({...props, focused: props.focused, center: true}),
            }}/>
            <BottomTab.Screen name="CommunityPage" component={CommunityStackNavigation} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'comment-processing':'comment-outline', text: '커뮤니티', focused: props.focused}),
            }}/>
            <BottomTab.Screen name="MyPage" component={MyPageStack} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'account':'account-outline', text: '프로필', focused: props.focused}),
            }}/>
        </BottomTab.Navigator>
    );
};

export default TabNavigation;
