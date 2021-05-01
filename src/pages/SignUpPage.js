import React from "react";
import styled from 'styled-components/native';
import TopBar from "../components/TobBar";
import IdInput from "../components/Input/IdInput";
import MessageInput from "../components/Input/MessageInput";
import CommentInput from "../components/Input/CommentInput";
import {KeyboardAvoidingView} from "react-native";

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;
const ParentContainer = styled.SafeAreaView`
  flex: 1;
`;
const StyledText=styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
export const SignUpPage =() => {
    return (
        <ParentContainer>
            <TopBar/>
            <Container>
                <IdInput line='이메일'/>
                <IdInput line='비밀번호'/>
                <IdInput line='비밀번호 확인'/>
                <IdInput line='닉네임'/>
            </Container>
        </ParentContainer>
    );
};
