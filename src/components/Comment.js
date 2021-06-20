import React from "react";
import styled from 'styled-components/native';
import {ProfileImage} from "./ProfileImage";
import {View} from "react-native";

const ProfileView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;
`;

const CommentView = styled.View`
    width: 100%;
    justify-content: center;
`;

const ProfileName = styled.Text`
    color: #ffffff;
    font-size: 14px;
    margin-left: 5px;
`;

const CommentText = styled.Text`
    color: #ffffff;
    font-size: 12px;
`;

export const Comment = ({ user, comment, imgURL }) => {
    return (
        <View>
            <ProfileView>
                <ProfileImage size={'SMALL'} imgURL={ imgURL }/>
                <ProfileName>{user}</ProfileName>
            </ProfileView>
            <CommentView>
                <CommentText>{comment}</CommentText>
            </CommentView>
        </View>
    );
};

Comment.defaultProps = {
  user: '작성자',
  comment: '댓글'
}
