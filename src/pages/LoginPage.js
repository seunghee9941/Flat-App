import React, {useRef} from "react";
import styled from 'styled-components/native';
import IdInput from "../components/Input/IdInput";
import {RoundButton} from "../components/RoundButton";
import {Text} from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: #101010;
  justify-content: center;
  align-items: center;
`;
const LoginView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LoginPage =({navigation}) => {
    const refId = useRef(null);
    const refPw = useRef(null);

    return (
        <Container>
            <LoginView>
                <IdInput name="account-outline" state="Login" keyType="next" refName={refId} nextRef={refPw} setValue={''}/>
                <IdInput name="lock" state="Login" keyType="done" refName={refPw} nextRef={null} hide={true} setValue={''}/>
                    <RoundButton state="COLOR_SMALL" name="로그인"/>
                    <RoundButton state="GRAY_SMALL" name="회원가입" pageName="SignUpPage" nav={navigation}/>
                <Text style={{color:'#ffffff', marginTop:10}}>구글 계정으로 로그인</Text>
            </LoginView>
        </Container>
    );
};
