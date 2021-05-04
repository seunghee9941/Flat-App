import * as React from 'react';
import {useLayoutEffect} from "react";
import {Image, Switch, Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import LargeSquareInput from "../components/Input/LargeSquareInput";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import UnderLineInput from "../components/Input/UnderLineInput";

const ParentContainer = styled.View`
  background-color: #101010;
  align-items: center;
  flex: 1;
`;

const EditView = styled.View`
  flex-direction: row;
  padding: 10px;
  border-color: #8E8E8E;
  border-bottom-width: 1px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ExplainView = styled.View`
  height: 150px;
  background-color: #101010;
  padding: 10px;
  width: 110%;
  justify-content: center;
`;
const PhotoView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #101010;
`;

const EditText = styled.Text`
  color: white;
  font-size: 20px;
  padding-right: 10px;
`;

const EditSavePage = ({navigation}) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                    size={32}
                    style={{marginRight: 11}}
                    color={tintColor}
                    onPress={() => navigation.popToTop()}
                />
            ),
        });
    }, [navigation]);

    return (
        <ParentContainer>
            <TouchableOpacity>
                <PhotoView>
                    <Image source={require('../../assets/images/dla.png')}
                           style={{width: 200, height: 200}}/>
                </PhotoView>
            </TouchableOpacity>
            <EditView>
                <EditText>제목</EditText>
                <UnderLineInput keyType="done" nextRef={null} icon={false}/>
            </EditView>
            <EditView>
                <EditText>설명</EditText>
                <ExplainView>
                    <LargeSquareInput/>
                </ExplainView>
            </EditView>
            <EditView>
                <EditText>길이</EditText>
                <Text style={{color: '#ffffff', paddingLeft: 10, fontSize: 20}}>3분 15초</Text>
            </EditView>
            <EditView>
                <EditText>공개 여부</EditText>
                <Switch
                    trackColor={{false: "#767577", true: "#307a82"}}
                    thumbColor={isEnabled ? "#5aebff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </EditView>

        </ParentContainer>
    )
}

export default EditSavePage;
