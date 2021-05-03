import React from "react";
import styled from 'styled-components/native';
import { FlatList,TouchableOpacity} from "react-native";
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

