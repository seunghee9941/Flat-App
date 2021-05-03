import React from 'react';
import styled from 'styled-components/native';
import {Ionicons} from "@expo/vector-icons";
import {Pressable} from "react-native";

const Container = styled.SafeAreaView`
    flex-direction: row;
`;

const InputContainer = styled.View`
  border-radius: 5px;
  width: 87%;
  height: 40px;
  margin: 5px 5px 5px 10px;
  padding: 0 3% 0 3%;
  background-color: #2E2E2E;
  border-color: ${props => props.isFocus ? "#51CDDE":"#2E2E2E"};
  border-width: 1px;
`;

const CommentInputText=styled.TextInput`
  width: 100%;
  height: 40px;
  font-size: 15px;
  color: #FFFFFF;
`;

const IconView = styled.View`
  justify-content: center;
`;

const CommentInput = () => {
    const [comment, setComment] = React.useState('');
    const [CommentFocus, setCommentFocus] = React.useState(false);

    return (
        <Container>
            <InputContainer isFocus={CommentFocus}>
                <CommentInputText
                    isFocus={CommentFocus}
                    underlineColorAndroid='transparent'
                    value={comment}
                    onChangeText={(comment) => setComment(comment)}
                    placeholder=""
                    onFocus={() => setCommentFocus(true)}
                    onBlur={() => setCommentFocus(false)}
                    returnKeyType="done"
                />
            </InputContainer>
            <IconView>
                <Pressable onPress={()=> null}>
                    {({ pressed }) => (
                        <Ionicons name="send-outline" size={30} color={pressed? "#3B848E" : "#51CDDE"} />
                    )}
                </Pressable>
            </IconView>
        </Container>
    );
};
export default CommentInput;
