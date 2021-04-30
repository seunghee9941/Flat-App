import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {HomePage} from "../pages/HomePage";
import {BgmPage} from "../pages/BgmPage";
import {ComposePage} from "../pages/ComposePage";
import {CommunityPage} from "../pages/CommunityPage";
import {MyPage} from "../pages/MyPage";
import {EditPage} from "../pages/EditPage";
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
               style:{
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
            <Tab.Screen name="BgmPage" component={BgmPage} options={{
                tabBarIcon: props=> TabIcon2({...props, name: props.focused? 'musical-notes':'musical-notes-outline',}),
                tabBarLabel: '무료 BGM'
            }}/>
            {/*실험중.. 나중에 ComposePage로 바꿔야함!*/}
            <Tab.Screen name="작곡" component={ComposePage} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'plus-circle':'plus-circle-outline',}),
            }}/>
            <Tab.Screen name="CommunityPage" component={CommunityPage} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'comment-processing':'comment-outline',}),
                tabBarLabel: '커뮤니티'
            }}/>
            <Tab.Screen name="MyPage" component={MyPage} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'account':'account-outline',}),
                tabBarLabel: '마이페이지'
            }}/>
        </Tab.Navigator>
    );
};
export default TabNavigation;
