import React from 'react';
import styled from 'styled-components/native'

const InputContainer = styled.SafeAreaView`
  background-color: #101010;
  height: 90%;
  width: 80%;
  padding: 3%;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => props.isFocus ? "#51cdde":"#8E8E8E"};
  margin-right: 0;
`;

const InputText=styled.TextInput`
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #FFFFFF;
`;

const LargeSquareInput = () => {
    const [text, setText] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <InputContainer isFocus={isFocused}>
            <InputText
                underlineColorAndroid='transparent'
                value={text}
                onChangeText={(setting) => setText(setting)}
                placeholder={'자유롭게 입력하세요'}
                placeholderTextColor="#8E8E8E"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </InputContainer>
    );
};

export default LargeSquareInput;
