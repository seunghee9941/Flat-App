import React from 'react';
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {PixelRatio, StyleSheet, View} from "react-native";

const ParentContainer=styled.View`
  background-color: #101010;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container = styled.View`
  width: 60%;
  height:30px;
  margin:5px;
  background-color: #101010;
  flex-direction: row;
  border-bottom-width: 1px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: ${props => props.isFocus ? "#51cdde":"#8E8E8E"};
`;
const IdInputText=styled.TextInput`
  width: 100%;
  color: #FFFFFF;
`;
const IdInput = (props) => {

    const [id, setId] = React.useState('');
    const [IdFocus, setIdFocus] = React.useState(false);

    return (
        <ParentContainer>
            <MaterialCommunityIcons name={props.name} size={30} color="white" style={{ padding: '2.5%' }} />
            <Container isFocus={IdFocus}>
                <IdInputText
                    value={id}
                    onChangeText={(id) => setId(id)}
                    placeholder={props.line}
                    placeholderTextColor="#8E8E8E"
                    onFocus={() => setIdFocus(true)}
                    onBlur={() => setIdFocus(false)}
                    ref={props.refName}
                    returnKeyType={props.keyType}
                    onSubmitEditing={() => props.nextRef!==null ? props.nextRef.current.focus():null}
                    secureTextEntry={props.hide}
                />
            </Container>
        </ParentContainer>
    );
};
export default IdInput;
