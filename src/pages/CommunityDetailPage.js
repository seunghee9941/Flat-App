import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
//import { Album } from '../components/Album';
import { Ionicons } from '@expo/vector-icons';

const CommentInput = styled.TextInput`
    width: 311px;
    height: 34.2px;
    border-radius: 6px;
    background-color: #2E2E2E;
    color: #ffffff;
`;

const CommentContainer = styled.View`
    
`;

const CommentUser = styled.Text`
    color: #ffffff;
    font-size: 14px;
`;

const Comment = styled.Text`
    color: #ffffff;
    font-size: 12px;
`;

const CommunityIcon = ({ name, size, color }) => {
    return <Ionicons name={name} size={size} color={color} />
}

export const CommunityDetailPage = () => {
    return (
        <>
            <CommentUser>옆집 오리</CommentUser>
            <Comment>순간 잔디..</Comment>
            <CommentInput
                returnKeyType="done"
            />
            <CommunityIcon name="play" size={80} color="#ffffff" />
            <CommunityIcon name="heart" size={24} color="#ffffff" />
            <CommunityIcon name="share-social" size={24} color="#ffffff" />
            <Ionicons name="send-outline" size={24} color="#51CDDE" />
        </>
    )
}
