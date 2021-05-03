import React, {useState} from 'react';
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ParentContainer=styled.View`
  background-color: #101010;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px
`;
const Container = styled.View`
  width: 60%;
  height:30px;
  margin:5px;
  background-color: #101010;
  border-bottom-width: 1px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: ${props => props.isFocus ? "#51cdde":"#8E8E8E"};
  flex-direction: column;
`;
const IdInputText=styled.TextInput`
  width: 100%;
  color: #FFFFFF;
`;
const EmailText=styled.Text`
  color: red;
  font-size: 10px;
`;
const ValidatorView = styled.View`
  height: 10px;
  background-color: #101010;
  margin: 8px 0 8px 0;
`;

const IdInput = (props) => {
    const [text, setText] =useState('');
    const [IdFocus, setIdFocus] = useState(false);

    return (
        <ParentContainer>
            <MaterialCommunityIcons name={props.name} size={30} color="white" style={{ padding: '2.5%' }} />
            <Container isFocus={IdFocus}>
                {props.state==="Login" ?
                    <IdInputText
                        value={text}
                        onChangeText={
                            (e)=>{setText(e)}}
                        placeholder={props.line}
                        placeholderTextColor="#8E8E8E"
                        onFocus={() => setIdFocus(true)}
                        onBlur={() => setIdFocus(false)}
                        ref={props.refName}
                        returnKeyType={props.keyType}
                        onSubmitEditing={() => props.nextRef!==null ? props.nextRef.current.focus():null}
                        secureTextEntry={props.hide}
                    />
                    :<>
                    <IdInputText
                        value={text}
                        onChangeText={
                            (e)=>{setText(e); props.setValue(e);}}
                        placeholder={props.line}
                        placeholderTextColor="#8E8E8E"
                        onFocus={() => setIdFocus(true)}
                        onBlur={() => setIdFocus(false)}
                        ref={props.refName}
                        returnKeyType={props.keyType}
                        onSubmitEditing={() => props.nextRef!==null ? props.nextRef.current.focus():null}
                        secureTextEntry={props.hide}
                    />
                    <ValidatorView>
                        { props.state==='Email' && <EmailText >{props.description}</EmailText> }
                        { props.state==='Pw' && <EmailText>{props.description}</EmailText> }
                        { props.state==='PwCheck' && <EmailText>{props.description}</EmailText> }
                    </ValidatorView>
                    </>
                }
            </Container>
        </ParentContainer>
    );
};
export default IdInput;
