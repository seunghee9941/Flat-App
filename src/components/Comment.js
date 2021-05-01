import React from "react";
import styled from 'styled-components/native';
import {Dimensions} from "react-native";
import {Album} from "./Album";
import {Profile} from "./Profile";

const ProfileContainer = styled.View`
    width: 100%;
    height: 50%;
    flex-direction: row;
    align-items: center;
`;

const ContentContainer = styled.View`
    width: 100%;
    height: 50%;
    justify-content: center;
`;

const CommentUser = styled.Text`
    color: #ffffff;
    font-size: 14px;
`;

const CommentContent = styled.Text`
    height: 50%;
    color: #ffffff;
    font-size: 12px;
`;

export const Comment = ({ user, comment }) => {
    return (
        <>
            <ProfileContainer>
                <Profile size={'SMALL'} imgURL={''}/>
                <CommentUser>{user}</CommentUser>
            </ProfileContainer>
            <ContentContainer>
                <CommentContent>{comment}</CommentContent>
            </ContentContainer>
        </>
    );
};
