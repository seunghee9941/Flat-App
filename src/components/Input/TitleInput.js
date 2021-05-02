import React from 'react';
import styled from 'styled-components/native'

const ParentContainer=styled.View`
  background-color: #101010;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container = styled.View`
  width: 90%;
  height:30px;
  background-color: #101010;
  flex-direction: row;
  border-bottom-width: 1px;
  padding-left: 10px;
  padding-right: 10px;
  border-color: ${props => props.isFocus ? "#51cdde":"#8E8E8E"};
`;
const TitleInputText=styled.TextInput`
  width: 100%;
  color: #FFFFFF;
`;
const TitleInput = (props) => {

    const [title, setTitle] = React.useState('');
    const [TitleFocus, setTitleFocus] = React.useState(false);

    return (
        <ParentContainer>
            <Container isFocus={TitleFocus}>
                <TitleInputText
                    value={title}
                    onChangeText={(title) => setTitle(title)}
                    placeholder={props.line}
                    placeholderTextColor="#8E8E8E"
                    onFocus={() => setTitleFocus(true)}
                    onBlur={() => setTitleFocus(false)}
                    ref={props.refName}
                    returnKeyType={props.keyType}
                    secureTextEntry={props.hide}
                />
            </Container>
        </ParentContainer>
    );
};
export default TitleInput;
