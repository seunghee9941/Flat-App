import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  justify-content: space-between;
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


const TopBar2 = () => {
    return (
        <Container>
            <Text>취소</Text>
            <StyledText>Title</StyledText>
            <Ionicons name="download-outline" size={32} color="white" onPress={()=>alert('Save!')}/>
        </Container>
    );
}


export default TopBar2;
