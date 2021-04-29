import React from 'react';
import styled from 'styled-components/native'

const Container = styled.View`
  justify-content: center;
  align-self: stretch;
  height: 52px;
  align-items: center;
  background-color: #101010;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 1px;
  flex-direction: row;
  border-bottom-color: #8E8E8E;
`;
const StyledText= styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const TopBar = () => {
    return (

        <Container>
            <StyledText>Flat</StyledText>
        </Container>
        );
    };


export default TopBar;
