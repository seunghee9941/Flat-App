import React, {useRef} from "react";
import styled from 'styled-components/native';
import TopBar from "../components/TobBar";
import IdInput from "../components/Input/IdInput";
import MessageInput from "../components/Input/MessageInput";
import CommentInput from "../components/Input/CommentInput";
import {Image, KeyboardAvoidingView, View} from "react-native";
import {RoundButton} from "../components/RoundButton";

const RegisterView = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;
const LogoView = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;
const ParentContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #101010;
  justify-content: center;
  align-items: center;
`;
const StyledText=styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
export const SignUpPage =() => {


    const refId = useRef(null);
    const refPw = useRef(null);
    const refIdCheck = useRef(null);
    const refNick = useRef(null);

    return (
        <ParentContainer>
            <LogoView>
                <Image source={require('../../assets/images/logo.png')}/>
            </LogoView>
            <RegisterView>
                <IdInput name={'email-outline'} line='이메일' keyType="next" refName={refId} nextRef={refPw}/>
                <IdInput name={'lock'} line='비밀번호' keyType="next" refName={refPw} nextRef={refIdCheck} hide={true}/>
                <IdInput name={'check-circle-outline'} line='비밀번호 확인' keyType="next" refName={refIdCheck} nextRef={refNick} hide={true}/>
                <IdInput name={'emoticon-happy-outline'} line='닉네임' refName={refNick} nextRef={null}/>
            </RegisterView>
            <RoundButton state="COLOR_SMALL" name="가입하기"/>
        </ParentContainer>
    );
};
