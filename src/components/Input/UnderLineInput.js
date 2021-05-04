import React, {useState} from 'react';
import styled from 'styled-components/native'
import {MaterialCommunityIcons} from "@expo/vector-icons";

const InputContainer=styled.View`
  background-color: #101010;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px
`;

const InputView = styled.View`
  width: ${props => props.width ? 60 : 90}%;
  height:30px;
  margin:5px;
  background-color: #101010;
  border-bottom-width: 1px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: ${props => props.isFocus ? "#51cdde":"#8E8E8E"};
  flex-direction: column;
`;

const InputText=styled.TextInput`
  width: 100%;
  color: #FFFFFF;
`;

const ValidatorView = styled.View`
  height: 10px;
  background-color: #101010;
  margin: 8px 0 8px 0;
`;

const ValidatorText=styled.Text`
  color: red;
  font-size: 10px;
`;

const UnderLineInput = (props) => {
    const [text, setText] =useState('');
    const [isFocus, setIsFocus] = useState(false);

    return (
      <InputContainer>
        {props.icon &&
          <MaterialCommunityIcons name={props.name} size={30} color="white" style={{padding: '2.5%'}}/>
        }
        <InputView isFocus={isFocus} width={props.icon}>
            <InputText
                value={text}
                onChangeText={
                    (e)=>{setText(e); props.state !=="Login" && props.setValue(e);}}
                placeholder={props.line}
                placeholderTextColor="#8E8E8E"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                ref={props.refName}
                returnKeyType={props.keyType}
                onSubmitEditing={() => props.nextRef!==null ? props.nextRef.current.focus():null}
                secureTextEntry={props.hide}
            />
            {props.icon &&
              <ValidatorView>
                { props.state==='Email' && <ValidatorText >{props.description}</ValidatorText> }
                { props.state==='Pw' && <ValidatorText>{props.description}</ValidatorText> }
                { props.state==='PwCheck' && <ValidatorText>{props.description}</ValidatorText> }
              </ValidatorView>}
        </InputView>
      </InputContainer>
    );
};

UnderLineInput.defaultProps = {
  icon: true,
}

export default UnderLineInput;
