import React from "react";
import styled from 'styled-components/native';
import TopBar from "../components/TobBar";
import {Dimensions, FlatList, ScrollView, TouchableOpacity, View} from "react-native";
import { Album } from "../components/Album";
import GridView from 'react-native-gridview';

const Container = styled.View`
  padding-left: 5%;
`;
const Container2 = styled.View`
  height: 50px;
  align-items: center;
  background-color: #101010;
  flex-direction: row;
  padding-left: 10%;
  padding-top: 3%;
`;
const ParentContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #101010;
`;
const StyledText=styled.Text`
  font-size: 20px;
  color: #ffffff;
`;
const StyledView=styled.View`
  flex-direction: row;
  margin:1%;
  padding-bottom: 2%;
  border-bottom-width: 1px;
  border-color: #C4C4C4;
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
            <TopBar/>
            <Container2>
                <StyledText>무료 BGM</StyledText>
            </Container2>
            <FlatList data={albums}
                      renderItem={renderAlbum}
                      keyExtractor={(item)=> item.id} //수정
                      style={{margin:20}}
            />
        </ParentContainer>
    );
};
const albums = [
    {
        id:"1",
        coverURL: '../../assets/images/AlbumCover.png',
        liked: false,
        title: '정말',
        artist: '작곡가',
        time: '3:01',
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

