import * as React from 'react';
import {Button, Image} from 'react-native';
import { Audio } from 'expo-av';
import styled  from 'styled-components/native';
import {RecordingOptions} from "expo-av/build/Audio/Recording";
import {useLayoutEffect} from "react";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import * as FileSystem from "expo-file-system/build/FileSystem";


//녹음하기 버튼 누르면 ComposePage -> 녹음
// 녹음에서 완료버튼 -> EditPage
// 녹음에서 취소버튼 -> ComposePage
//보내야할 것은 몇분몇초

export const RecordPage = ({ toggleButton }) => {
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

    async function init() {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'records/');
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
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const recordUri = recording.getURI();
        // await FileSystem.moveAsync({from: recordUri, to: FileSystem.documentDirectory + 'records/recorded.wav'})
        // const test = FileSystem.documentDirectory + 'records/recorded.wav';
        // const test2 = await FileSystem.getInfoAsync(test);
        console.log(await FileSystem.getInfoAsync(recordUri));
        console.log('Recording stopped and stored at', recordUri);
    }

        return (

            <Container>
                <StyledPress
                    onPress={recording ? stopRecording : startRecording}
                    onPressOut={() => toggleButton()}>
                    {state.recordingT ?
                        <MaterialCommunityIcons name="stop" size={50} color="white" /> : <MaterialCommunityIcons name="microphone-settings" size={50} color="white" /> }
                </StyledPress>
            </Container>
        );
    }

    export default RecordPage;

    export const RECORDING_OPTIONS_PRESET_HIGH_QUALITY: RecordingOptions = {
        isMeteringEnabled: true,
        android: {
            extension: '.wav',
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
        },
    };

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
      border-color : #51CDDE ;
      align-items: center;
      justify-content: center;
    `;
