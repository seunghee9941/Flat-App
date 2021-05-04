import React, {useState} from "react";
import styled from 'styled-components/native';
import {Image, Text, Switch, Button, View, Dimensions, KeyboardAvoidingView} from "react-native";
import LargeSquareInput from "../components/Input/LargeSquareInput";
import {ProfileImage} from "../components/ProfileImage";


const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;
const ParentContainer = styled.ScrollView`
  flex: 1;
  background-color: #101010;
`;
const ProfileView=styled.View`
  height: 150px;
  background-color: #101010;
  justify-content: center;
  align-items: center;
`;
const UserView=styled.View`
  height: 55px;
  background-color: #101010;
  padding: 3%;
  border-color: #8E8E8E;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
`;
const StyledText=styled.Text`
  font-size: 18px;
  color: #ffffff;
`;
const Introduce=styled.View`
  display: flex;
  height: 200px;
  background-color: #101010;
  padding: 3%;
  border-color: #8E8E8E;
  flex-direction: row;
  border-bottom-width: 1px;
  align-items: center;
  width: ${Dimensions.get('window').width}px;
  justify-content: space-between;
`;
export const ProfileEditPage =({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

        <ParentContainer>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
            <ProfileView>
                <ProfileImage size={'LARGE'} imgURL="https://reactnative.dev/img/tiny_logo.png"/>
                <Text style={{color: 'white'}}>프로필 설정</Text>
            </ProfileView>
            <UserView>
                <StyledText>로그인 정보</StyledText>
                <StyledText>innerpeace@gmail.com</StyledText>
            </UserView>
            <Introduce>
                <StyledText>소개</StyledText>
                <LargeSquareInput/>
            </Introduce>
            <UserView>
                <StyledText>알림 설정</StyledText>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={ isEnabled ? "#1E90FF" : "#f4f3f4" }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </UserView>
            <View style={{ alignItems:"center", justifyContent:"flex-end"}}>
                <Button color="#101010" title='로그아웃' onPress={()=>alert('로그아웃 되었습니다.!')}/>
            </View>
            </KeyboardAvoidingView>
        </ParentContainer>


    );
};
