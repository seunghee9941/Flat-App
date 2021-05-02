import React from "react";
import styled from 'styled-components/native';
import TopBar from "../components/TobBar";
import {RoundButton} from "../components/RoundButton";

const ParentContainer = styled.View`
  flex: 1;
`;

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;

export const ComposePage =() => {
    return (
        <ParentContainer>
            <TopBar/>
            <Container>
                <RoundButton state="GRAD_LARGE" name="녹음하기"/>
                <RoundButton state="GRAD_LARGE" name="편집하기"/>
                <RoundButton state="GRAD_LARGE" name="무료 BGM"/>
            </Container>
        </ParentContainer>
    );
};
