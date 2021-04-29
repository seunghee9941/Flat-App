import React from "react";
import styled from 'styled-components/native';

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
export const BgmPage =() => {
    return (
        <Container>
            <StyledText>BgmPage</StyledText>
        </Container>
    );
};
