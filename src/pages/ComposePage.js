import React from "react";
import styled from 'styled-components/native';
import TopBar from "../components/TobBar";

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;
const ParentContainer = styled.View`
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
            <Container>
                <StyledText>ComposePage</StyledText>
            </Container>
        </ParentContainer>
    );
};
