import React from "react";
import styled from 'styled-components/native';
import TopBar from "../components/TobBar";
import { FlatList, TouchableOpacity } from "react-native";
import { Album } from "../components/Album";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20% 2% 0 2%;
`;
const ParentContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #101010;
`;
const StyledView=styled.View`
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

export const CommunityPage =({ navigation }) => {
    const renderAlbum=({item})=>(
        <StyledView>
            <TouchableOpacity onPress={() => navigation.navigate('CommunityDetail')}>
                <Container>
                    <Album title={item.title} state={item.state} description={item.description} time={item.time} artist={item.artist} liked={item.liked}/>
                </Container>
            </TouchableOpacity>
        </StyledView>
    );

    return (
        <ParentContainer>
            <TopBar/>
            <FlatList data={albums}
                renderItem={renderAlbum}
                      keyExtractor={(item)=> item.id} //수정
                      numColumns={2}/>
        </ParentContainer>
    );
};

const albums = [
    {
        id: "1",
        title: '조이',
        state: 'LIKE_LARGE',
        description: '깔깔깔',
        time: '1:20',
        artist:'보경',
        liked: true
    },
    {
        id: "2",
        title: '슬픔이',
        state: 'LIKE_LARGE',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        liked: true
    },
    {
        id: "3",
        title: '소심이',
        state: 'LIKE_LARGE',
        description: '슬퍼!',
        time: '1:20',
        artist:'보경',
        liked: true
    },
    {
        id: "4",
        title: 'Hello',
        state: 'LIKE_LARGE',
        description: '뭘봐?',
        time: '1:20',
        artist:'보경',
        liked: true
    },
    {
        id: "5",
        title: '슬픔이',
        state: 'LIKE_LARGE',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        liked: true
    },
    {
        id: "6",
        title: '슬픔이',
        state: 'LIKE_LARGE',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        liked: true
    },{
        id: "7",
        title: '슬픔이',
        state: 'LIKE_LARGE',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        liked: true
    },{
        id: "8",
        title: '슬픔이',
        state: 'LIKE_LARGE',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        liked: true
    },
];

