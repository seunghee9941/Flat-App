import React from 'react';
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
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
const MessageInput = () => {

    const [setting, setSetting] = React.useState('');
    const [SettingFocus, setSettingFocus] = React.useState(false);

    return (

        <Container isFocus={SettingFocus}>
            <InputText
                underlineColorAndroid='transparent'
                value={setting}
                onChangeText={(setting) => setSetting(setting)}
                placeholder={'자유롭게 입력하세요'}
                placeholderTextColor="#8E8E8E"
                onFocus={() => setSettingFocus(true)}
                onBlur={() => setSettingFocus(false)}

            />
        </Container>
    );
};

export default MessageInput;
