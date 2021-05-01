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
export const ComposePage =() => {
    return (
        <ParentContainer>
            <TopBar/>
            {/*<IdInput line="ID"/>*/}
            {/*<CommentInput/>*/}
            <Container>
                <StyledText>ComposePage</StyledText>
            </Container>
        </ParentContainer>
    );
};
