import React, {useRef} from "react";
import styled from 'styled-components/native';
import IdInput from "../components/Input/IdInput";
import {RoundButton} from "../components/RoundButton";
import {Image, Text} from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: #101010;
  justify-content: center;
  align-items: center;
`;
const LogoView = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;
const LoginView = styled.View`
  align-items: center;
  justify-content: center;
`;

const ButtonView = styled.View`
  margin-top: 30px;
`;

export const LoginPage =({ navigation }) => {
    const refId = useRef(null);
    const refPw = useRef(null);

    return (
        <Container>
            <LogoView>
                <Image source={require('../../assets/images/logo.png')}/>
            </LogoView>
            <LoginView>
                <IdInput name="account-outline" keyType="next" refName={refId} nextRef={refPw} line="아이디"/>
                <IdInput name="lock" keyType="done" refName={refPw} nextRef={null} hide={true} line="비밀번호"/>
                <ButtonView>
                    <RoundButton state="COLOR_SMALL" name="로그인" pageName="HomeTab" nav={navigation}/>
                    <RoundButton state="GRAY_SMALL" name="회원가입" pageName="SignUpPage" nav={navigation}/>
                </ButtonView>
                <Text style={{color:'#ffffff', marginTop:10}}>구글 계정으로 로그인</Text>
            </LoginView>
        </Container>
    );
};
