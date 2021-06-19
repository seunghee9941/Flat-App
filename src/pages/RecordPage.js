import * as React from 'react';
import {Audio} from 'expo-av';
import styled from 'styled-components/native';
import {useEffect, useLayoutEffect,} from "react";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import * as FileSystem from "expo-file-system/build/FileSystem";
import {Button} from "react-native";
import * as tf from '@tensorflow/tfjs'
import {bundleResourceIO, fetch} from "@tensorflow/tfjs-react-native";

// 녹음하기 버튼 누르면 ComposePage -> 녹음
// 녹음에서 완료버튼 -> EditPage
// 녹음에서 취소버튼 -> ComposePage
// 보내야할 것은 몇분몇초

let rr = "";
export const RecordPage = ({toggleButton, navigation}) => {
    const [recording, setRecording] = React.useState();
    const [sound, setSound] = React.useState();
    const [state, setState] = React.useState({recordingT: false});




    toggleButton = () => {
        if (state.recordingT) {
            setState({recordingT: false})
        } else {
            setState({recordingT: true})
        }
    };

    useEffect(() => {
        init();

    }, []);

    // let model;
    //
    // async function loadModel(){
    //
    //     await tf.ready();
    //     console.log("tf is ready!");
    //
    //     const modelJSON = require('../../assets/model/model.json');
    //     const modelWeights1 = require('C:/Users/user/INR-peace/Flat-App/assets/model/group1-shard1of3.bin');
    //     const modelWeights2 = require('C:/Users/user/INR-peace/Flat-App/assets/model/group1-shard2of3.bin');
    //     const modelWeights3 = require('C:/Users/user/INR-peace/Flat-App/assets/model/group1-shard3of3.bin');
    //
    //     model=await tf.loadLayersModel(bundleResourceIO(modelJSON, [modelWeights1,modelWeights2,modelWeights3]));
    //     console.log("Model loaded!");
    // }

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
                <AntDesign
                    name="check"
                    size={30}
                    style={{marginRight: 11}}
                    color={tintColor}
                    onPress={() => navigation.navigate("EditPage")}
                />
            ),
        });
    }, []);

    async function init() {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'flat');

    }

    async function startRecording() {
        try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        let r = Math.random().toString(36).substring(7);
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const recordUri = recording.getURI();
        console.log(recordUri);
        rr = r;
        await FileSystem.moveAsync({from: recordUri, to: FileSystem.documentDirectory + `flat/${r}.wav`});
        console.log(await FileSystem.readDirectoryAsync(FileSystem.documentDirectory + `flat`));
        console.log('Recording stopped and stored at', FileSystem.documentDirectory + `flat/${r}.wav`);
    }

    async function playSound() {
        console.log('Loading Sound');
        const soundObject = new Audio.Sound();
        console.log(`${rr}.wav`);
        const path = FileSystem.documentDirectory + `flat/${rr}.wav`;
        try {
            await soundObject.loadAsync({uri:path});
            await soundObject.playAsync();
        } catch (error) {
            console.log("Error", error);
        }
    }


    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                Audio.Sound.unloadAsync(); }
            : undefined;
    }, [sound]);

    return (
        <Container>
            <StyledPress
                onPress={recording ? stopRecording : startRecording}
                onPressOut={() => toggleButton()}>
                {state.recordingT ?
                    <MaterialCommunityIcons name="stop" size={50} color="white"/> :
                    <MaterialCommunityIcons name="microphone-settings" size={50} color="white"/>}
            </StyledPress>
            <Button title={"START SOUND"} onPress={playSound}/>
            {/*<Button title={"Load"} onPress={loadModel}/>*/}
        </Container>
    );
}

export default RecordPage;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;

const StyledPress = styled.Pressable`
  width: 222px;
  height: 222px;
  border-radius: 111px;
  border-width: 15px;
  border-color: #51CDDE;
  align-items: center;
  justify-content: center;
`;
