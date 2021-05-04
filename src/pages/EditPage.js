import React, {useLayoutEffect} from "react";
import {View, Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {SquareButtonList} from '../components/Button/SquareButtonList';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const FirstRoute = () => (
    <View style={[styles.scene]}/>
);

const SecondRoute = () => (
    <View style={[styles.scene]}>
        <SquareButtonList effects={["Piano", "Drum", "Acoustic", "Electronic", "Saxophone", "Violin"]}/>
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene]}>
        <SquareButtonList effects={["BALLAD", "R&B", "Rock", "HIP HOP", "JAZZ", "DANCE"]}/>
    </View>
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

export const EditPage = ({navigation}) => {
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

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: '#ffffff',

            headerLeft: ({onPress, tintColor}) => {
                return (
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={30}
                        style={{marginLeft: 11}}
                        color={tintColor}
                        onPress={onPress}
                    />
                );
            },
            headerRight: ({tintColor}) => (
                <Ionicons name="download-outline"
                          size={32}
                          style={{marginRight: 11}}
                          color={tintColor}
                          onPress={() => navigation.navigate("EditSavePage")}
                />
            ),
        });
    }, []);

    return (
        <ParentContainer>
            {/*<TopBar2/>*/}
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
        backgroundColor: '#C4C4C4',
    },
    like: {
        padding: 8,
        backgroundColor: '#101010',
        fontSize: 10,
    },
});

