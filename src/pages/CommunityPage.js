import React from "react";
import styled from 'styled-components/native';
import {FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import { Album } from "../components/Album";

const RenderAlbumView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

const AlbumWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: ${props => props.index%2 === 1 ? "20% 0 0 5%" : "20% 5% 0 0"};
`;


export const CommunityPage =({ navigation }) => {
    const renderAlbum=({item})=>(
        <RenderAlbumView>
            <TouchableOpacity onPress={() => navigation.navigate('CommunityDetail')}>
                <AlbumWrapper index={item.id}>
                    <Album state="LIKE_LARGE" title={item.title} description={item.description} time={item.time} artist={item.artist} liked={item.liked}
                    coverURL={{uri:'https://rereco.co/wp-content/uploads/2021/02/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2021-02-03-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-4.55.06.jpg'}}
                    />
                </AlbumWrapper>
            </TouchableOpacity>
        </RenderAlbumView>
    );

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:"#101010"}}>
            <FlatList data={albums}
                renderItem={renderAlbum}
                      keyExtractor={(item)=> item.id} //수정
                      numColumns={2}
            />
        </SafeAreaView>
    );
};

const albums = [
    {
        coverURL: require("../../assets/images/communityImage/communityImage1.jpg"),
        id: "1",
        title: '흥얼흥얼',
        description: '깔깔깔',
        time: '0:25',
        artist: '라이언',
        liked: true
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage2.jpg"),
        id: "2",
        title: '둠치둠칫',
        description: '흐애애앵',
        time: '1:20',
        artist: '뚱이',
        liked: true
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage3.jpg"),
        id: "3",
        title: '포로리야',
        description: '슬퍼!',
        time: '1:00',
        artist: '보노보노',
        liked: true
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage4.jpg"),
        id: "4",
        title: '신나는 노래',
        description: '뭘봐?',
        time: '0:45',
        artist: '토끼',
        liked: true
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage5.jpg"),
        id: "5",
        title: '술먹고 부른 노래',
        description: '흐애애앵',
        time: '1:05',
        artist: '올라프',
        liked: true
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage6.jpg"),
        id: "6",
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist: '보경',
        liked: true
    }, {
        coverURL: require("../../assets/images/communityImage/communityImage7.jpg"),
        id: "7",
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist: '보경',
        liked: true
    }, {
        coverURL: require("../../assets/images/communityImage/communityImage7.jpg"),
        id: "8",
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist: '보경',
        liked: true
    },
];

