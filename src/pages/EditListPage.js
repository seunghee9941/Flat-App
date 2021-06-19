import React from "react";
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from "react-native";
import { Album } from "../components/Album";

const Container = styled.View`
  padding-left: 5px;
  
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
  flex: 1;
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

export const EditListPage =({ navigation }) => {
    const renderAlbum=({item})=>(
        <StyledView>
            <TouchableOpacity onPress={() => navigation.navigate('EditPage')}>
                <Container>
                    <Album state={'PLAY_SMALL'} coverURL={item.coverURL} artist={item.artist} liked={item.liked} title={item.title}/>
                </Container>
            </TouchableOpacity>
        </StyledView>
    )
    return (
        <ParentContainer>
            <Container2>
                <StyledText>My Songs</StyledText>
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
        coverURL: require("../../assets/images/EditListImage/EditListImage1.jpg"),
        title: '노래',
        artist: '작곡가',
        time: '3:01',
    },
    {
        id: "2",
        coverURL: require("../../assets/images/EditListImage/EditListImage2.png"),
        title: '노래2',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "3",
        coverURL: require("../../assets/images/EditListImage/EditListImage3.png"),
        title: '예진이의 댄스 노래',
        description: '슬퍼!',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "4",
        coverURL: require("../../assets/images/EditListImage/EditListImage4.jpg"),
        title: '보경이의 엘레강스한 노래',
        description: '뭘봐?',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "5",
        coverURL: require("../../assets/images/EditListImage/EditListImage5.jpg"),
        title: '소지의 멋쟁이 노래',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },
    {
        id: "6",
        coverURL: require("../../assets/images/EditListImage/EditListImage6.png"),
        title: '승희의 발라드',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },{
        id: "7",
        coverURL: require("../../assets/images/EditListImage/EditListImage7.jpg"),
        title: '노래3',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },{
        id: "8",
        coverURL: require("../../assets/images/EditListImage/EditListImage8.png"),
        title: '노래4',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
    },
];

