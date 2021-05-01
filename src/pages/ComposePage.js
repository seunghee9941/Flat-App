import React from "react";
import styled from 'styled-components/native';
import TopBar from "../components/TobBar";
import {RoundButton} from "../components/RoundButton";
import IdInput from "../components/Input/IdInput";
import MessageInput from "../components/Input/MessageInput";
import CommentInput from "../components/Input/CommentInput";
import {KeyboardAvoidingView, Pressable} from "react-native";
import {Button} from "react-native";

const ParentContainer = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;

export const ComposePage = ({navigation}) => {
    return (
        <ParentContainer>
            <Container>
                <RoundButton state="GRAD_LARGE" name="녹음하기" pageName="RecordPage" nav={navigation}/>
                <RoundButton state="GRAD_LARGE" name="편집하기" pageName="EditPage" nav={navigation}/>
                <RoundButton state="GRAD_LARGE" name="무료 BGM" pageName="BgmPage" nav={navigation}/>
            </Container>
        </ParentContainer>
    );
};
