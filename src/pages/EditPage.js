
// 작곡 페이지

import React from "react";
import {View, Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import TopBar2 from "../components/TobBar2";
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TopBar from "../components/TobBar";
//버튼 들어갈 곳
const FirstRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#101010'}]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#101010'}]} />
);
const ThirdRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#101010'}]} />
);
const initialLayout = {width: Dimensions.get('window').width};
// MusicSheet들어갈 자리 임시방편
const Container = styled.View`
  justify-content: center;
  align-self: stretch;
  height: 248px;
  align-items: center;
  background-color: #FFFFFF;
  border-width: 1px;
  flex-direction: row;
  border-bottom-color: #8E8E8E;
`;
const ParentContainer = styled.View`
  flex: 1;
`;
const StyledText=styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
export const EditPage =() => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '악보편집'},
        {key: 'second', title: '사운드'},
        {key: 'third', title: '장르'},
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });


    return (
        <ParentContainer>
            <TopBar2/>
            <Container/>

            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        style={styles.like}
                        indicatorStyle={{
                            backgroundColor: '#87F8FF',
                        }}
                    />
                )}
            />
        </ParentContainer>
    );
};
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    like: {
        padding: 8,
        backgroundColor: '#101010',
        fontSize: 10,
    },
});

