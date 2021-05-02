import React, {useRef} from "react";
import styled from 'styled-components/native';
import IdInput from "../components/Input/IdInput";
import {RoundButton} from "../components/RoundButton";
import {Text} from "react-native";

const LoginView = styled.View`
  align-items: center;
  justify-content: center;
`;

const ButtonView = styled.View`
  margin-top: 30px;
`;

export const LoginPage =() => {
    const refId = useRef(null);
    const refPw = useRef(null);

    return (
        <LoginView>
            <IdInput name="account-outline" keyType="next" refName={refId} nextRef={refPw}/>
            <IdInput name="lock" keyType="done" refName={refPw} nextRef={null} hide={true}/>

                <RoundButton state="COLOR_SMALL" name="로그인" />
                <RoundButton state="GRAY_SMALL" name="회원가입" />

            <Text style={{color:'#ffffff', marginTop:10}}>구글 계정으로 로그인</Text>
        </LoginView>
    );
};
