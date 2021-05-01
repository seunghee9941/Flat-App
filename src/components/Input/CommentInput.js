import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  border-radius: 5px;
  width: 85%;
  height: 40px;
  margin:5px;
  background-color: ${props => props.isFocus ? "#FFFFFF":"#2E2E2E"};
  border-color: ${props => props.isFocus ? "#51cdde":"#8E8E8E"};
  border-width: 1px;
`;
const CommentInputText=styled.TextInput`
  width: 85%;
  height: 40px;
  font-size: 15px;
  color: ${props => props.isFocus ? "#000000":"#FFFFFF"};
`;
const CommentInput = () => {

    const [comment, setComment] = React.useState('');
    const [CommentFocus, setCommentFocus] = React.useState(false);

    return (
        <Container isFocus={CommentFocus}>
            <CommentInputText
                isFocus={CommentFocus}
                underlineColorAndroid='transparent'
                value={comment}
                onChangeText={(comment) => setComment(comment)}
                placeholder=""
                onFocus={() => setCommentFocus(true)}
                onBlur={() => setCommentFocus(false)}
            />
        </Container>
    );
};
export default CommentInput;
