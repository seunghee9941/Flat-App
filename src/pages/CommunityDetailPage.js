import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Pressable, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Album } from "../components/Album";
import { Comment } from "../components/Comment";
import SmallSquareInput from "../components/Input/SmallSquareInput";

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
    margin: 20px 0 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: #9F9F9F;
    align-items: center;
`;

const IconContainer = styled.View`
    width: 14%;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    right: 10px;
    top: ${Dimensions.get('window').width-35}px;
`;

const CountContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-left: 2%;
    margin: 15px 0 5px 0;
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
                        <Album state={"PLAY_LARGE"} coverURL={'data:image/jpeg;base64,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'} />
                        <IconContainer>
                            <CommunityIcon name="heart" size={24} color="#ffffff"/>
                            <CommunityIcon name="bookmark" size={22} color="#ffffff" />
                        </IconContainer>
                    <CountContainer>
                        <CountText>댓글 {comments.length}개</CountText>
                        <CountText>좋아요 {comments.length}개</CountText>
                    </CountContainer>
                    </AlbumContainer>
                </HeaderContainer>
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
            <FlatList
                data={comments}
                renderItem={renderComment}
                keyExtractor={(item)=>item.id}
                ListHeaderComponent={HeaderComponent}
            />
            <SmallSquareInput/>
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
