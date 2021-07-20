import React, {useLayoutEffect, useState} from "react";
import {View, Dimensions, StyleSheet, SafeAreaView, Button} from 'react-native';
import styled from 'styled-components/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {SquareButtonList} from '../components/Button/SquareButtonList';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {MusicSheet} from "../components/MusicSheet";


const initialLayout = {width: Dimensions.get('window').width};

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

// MusicSheet들어갈 자리 임시방편
const MusicSheetView = styled.ScrollView`
  background-color: #FFFFFF;
  border-width: 1px;
  flex-direction: row;
  border-bottom-color: #8E8E8E;
  flex: 1;
`;

const FirstRoute = () => (
  <View style={[styles.scene]}>
      <SquareButtonList effects={["Piano", "Drum", "Acoustic", "Electronic", "Saxophone", "Violin"]}/>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]}>
      <SquareButtonList effects={["BALLAD", "R&B", "Rock", "HIP HOP", "JAZZ", "DANCE"]}/>
  </View>
);

const getMidiNum = (note) => {  // C3 ~ B5
    switch (note) {
        case "C3": return 48;
        case "D3": return 50;
        case "E3": return 52;
        case "F3": return 53;
        case "G3": return 55;
        case "A3": return 57;
        case "B3": return 59;
        case "C4": return 60;
        case "D4": return 62;
        case "E4": return 64;
        case "F4": return 65;
        case "G4": return 67;
        case "A4": return 69;
        case "B4": return 71;
        case "C5": return 72;
        case "D5": return 74;
        case "E5": return 76;
        case "F5": return 77;
        case "G5": return 79;
        case "A5": return 81;
        case "B5": return 83;
        default: return 60;
    }
}

const getNoteName = (midiNumber) => {
    switch (midiNumber) {
        case 48: return "C3"
        case 50: return "D3";
        case 52: return "E3";
        case 53: return "F3";
        case 55: return "G3"
        case 57: return "A3";
        case 59: return "B3";
        case 60: return "C4";
        case 62: return "D4";
        case 64: return "E4";
        case 65: return "F4";
        case 67: return "G4";
        case 69: return "A4";
        case 71: return "B4";
        case 72: return "C5";
        case 74: return "D5";
        case 76: return "E5";
        case 77: return "F5";
        case 79: return "G5";
        case 81: return "A5";
        case 83: return "B5";
        default: return "C4";
    }
}

// TODO: midi로 만들기

const getLeft = (index) => {
    return index * 30 + 20
}

export const EditPage = ({navigation}) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: '사운드'},
        {key: 'second', title: '장르'},
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const [notes, setNotes] = useState(["C3", "C4", "C4", "C4", "C4", "C4", "C4", "C4", "C4", "C4", "C4", "C4", "B5"]);
    const [midi, setMidi] = useState(notes.map((note) => getMidiNum(note)))
    const X = notes.map((note, index) => getLeft(index))
    const Y = midi.map((midi) => midi*5-200)

    const result = X.map((x, i) => {
        return [x, Y[i]]
    })

    const onPressTest = () => {
        console.log("onPressTest", notes)
    }

    useLayoutEffect(() => {
        console.log("Midi", midi)
        setNotes(midi.map((midi) => getNoteName(midi)))
    }, [midi])

    console.log("Effect", notes)

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
        <SafeAreaView style={{flex: 1, backgroundColor: "#101010"}}>
            {/*<TopBar2/>*/}
            <MusicSheetView horizontal={true}>
                <MusicSheet positions={result} setTest={setMidi}/>
            </MusicSheetView>
            <Button title={"Button"} onPress={onPressTest}/>
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
                            backgroundColor: '#51CDDE',
                        }}
                    />
                )}
            />
        </SafeAreaView>
    );
};


