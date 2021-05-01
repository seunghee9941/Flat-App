import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Pressable, FlatList, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Album } from "../components/Album";
import TopBar from "../components/TobBar";
import { Comment } from "../components/Comment";

const ParentContainer = styled.SafeAreaView`
    flex: 1;
    background-color: #101010;
`;

const HeaderContainer = styled.View`
    align-items: center;
`;

const AlbumContainer = styled.View`
    width: 90%;
    position: relative;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #9F9F9F;
    align-items: center;
`;

const IconContainer = styled.View`
    width: 50px;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    right: 10%;
    top: 335px;
`;

const CountContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    right: 2.5%;
`;

const CountText = styled.Text`
    font-size: 12px;
    color:#ffffff;
    padding: 5px;
`;

const CommentContainer = styled.View`
    width: 100%;
    justify-content: center;
    height: 60px;
    left: 7.5%;
`;

const InputContainer = styled.View`
    flex-direction: row;
`;

const CommentInput = styled.TextInput`
    width: 90%;
    height: 34px;
    border-radius: 6px;
    background-color: #2E2E2E;
    color: #ffffff;
    padding: 10px;
`;

const CommunityIcon = ({ name, size, color }) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <Pressable onPress={()=> {setIsClicked(!isClicked)}}>
            {isClicked ?
                <Ionicons name={name} size={size} color={color}/>
                :
                <Ionicons name={name+'-outline'} size={size} color={color}/>
            }
        </Pressable>
    );
};

export const CommunityDetailPage = () => {
    const HeaderComponent = () => {
        return (
            <>
                <HeaderContainer>
                    <AlbumContainer>
                        <Album state={"PLAY_LARGE"} />
                        <IconContainer>
                            <CommunityIcon name="heart" size={24} color="#ffffff"/>
                            <CommunityIcon name="bookmark" size={22} color="#ffffff" />
                        </IconContainer>
                    </AlbumContainer>
                </HeaderContainer>
                <CountContainer>
                    <CountText>댓글 {comments.length}개</CountText>
                    <CountText>좋아요 {comments.length}개</CountText>
                </CountContainer>
            </>
        );
    };

    const renderComment = ({item}) => (
        <CommentContainer>
            <Comment user={item.id} comment={item.comment}/>
        </CommentContainer>
    )

    return (
        <ParentContainer>
            <TopBar/>
            <FlatList
                data={comments}
                renderItem={renderComment}
                keyExtractor={(item)=>item.id}
                ListHeaderComponent={HeaderComponent}
            />
            <InputContainer>
                <CommentInput returnKeyType="done"/>
                <Pressable onPress={()=> null}>
                    <Ionicons name="send-outline" size={24} color="#51CDDE" />
                </Pressable>
            </InputContainer>
        </ParentContainer>
    );
};

const comments = [
    {
        id: '옆집토끼',
        comment: '순간 잔디에..'
    },
    {
        id: '뒷집토끼',
        comment: '감사합니다'
    },
    {
        id: '옆집토끼2',
        comment: '순간 잔디에..'
    },
    {
        id: '뒷집토끼2',
        comment: '감사합니다'
    },
    {
        id: '옆집토끼3',
        comment: '순간 잔디에..'
    },
    {
        id: '뒷집토끼3',
        comment: '감사합니다'
    }
];
