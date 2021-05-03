import React from "react";
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from "react-native";
import { Album } from "../components/Album";

const Container = styled.View`
  padding-left: 5%;
`;
const Container2 = styled.View`
  height: 50px;
  align-items: center;
  background-color: #101010;
  flex-direction: row;
  padding-left: 3%;
  margin: 2% 4% 2% 4%;
`;
const ParentContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #101010;
`;
const ListView = styled.View`
  margin: 2% 4% 2% 4%;  
`;
const StyledText=styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
const StyledView=styled.View`
  flex-direction: row;
  margin:1%;
  padding-bottom: 2%;  
`;

export const BgmPage =() => {
    const renderAlbum=({item})=>(
        <StyledView>
            <TouchableOpacity>
                <Container>
                    <Album state={'PLAY_SMALL'} coverURL={item.coverURL} artist={item.artist} liked={item.liked} title={item.title}/>
                </Container>
            </TouchableOpacity>
        </StyledView>
    )
    return (
        <ParentContainer>
            <Container2>
                <StyledText>무료 BGM</StyledText>
            </Container2>
            <ListView>
                <FlatList data={albums}
                          renderItem={renderAlbum}
                          keyExtractor={(item)=> item.id}/>
            </ListView>
        </ParentContainer>
    );
};

const albums = [
    {
        id:"1",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: '정말',
        artist: '작곡가',
        time: '3:01',
    },
    {
        id: "2",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "3",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: '소심이',
        description: '슬퍼!',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "4",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: 'Hello',
        description: '뭘봐?',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "5",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "6",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },{
        id: "7",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },{
        id: "8",
        coverURL: 'https://reactnative.dev/img/tiny_logo.png',
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },
];

