import React, {useRef} from "react";
import styled from 'styled-components/native';
import UnderLineInput from "../components/Input/UnderLineInput";
import {RoundButton} from "../components/Button/RoundButton";
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

export const LoginPage =({ navigation }) => {
    const refId = useRef(null);
    const refPw = useRef(null);

    return (
        <Container>
            <LogoView>
                <Image source={require('../../assets/images/logo.png')}/>
            </LogoView>
            <LoginView>
                <UnderLineInput name="account-outline" state="Login" keyType="next" refName={refId} nextRef={refPw} icon={true}/>
                <UnderLineInput name="lock" state="Login" keyType="done" refName={refPw} nextRef={null} hide={true} icon={true}/>
                    <RoundButton state="COLOR_SMALL" name="로그인" pageName="HomeTab" nav={navigation}/>
                    <RoundButton state="GRAY_SMALL" name="회원가입" pageName="SignUpPage" nav={navigation}/>
                <Text style={{color:'#ffffff', marginTop:10}}>구글 계정으로 로그인</Text>
            </LoginView>
        </Container>
    );
};
