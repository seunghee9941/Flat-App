import React from "react";
import styled from 'styled-components/native';
import {FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import {Album} from "../components/Album";

const RenderAlbumView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

const AlbumWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: ${props => props.index % 2 === 1 ? "20% 0 0 5%" : "20% 5% 0 0"};
`;


export const CommunityPage = ({navigation}) => {
    const renderAlbum = ({item}) => (
        <RenderAlbumView>
            <TouchableOpacity onPress={() => navigation.navigate('CommunityDetail')}>
                <AlbumWrapper index={item.id}>
                    <Album state="LIKE_LARGE" title={item.title} description={item.description} time={item.time}
                           artist={item.artist} liked={item.liked} coverURL={item.coverURL}/>
                </AlbumWrapper>
            </TouchableOpacity>
        </RenderAlbumView>
    );

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#101010"}}>
            <FlatList data={albums}
                      renderItem={renderAlbum}
                      keyExtractor={(item) => item.id} //수정
                      numColumns={2}
            />
        </SafeAreaView>
    );
};

const albums = [
    {
        coverURL: require("../../assets/images/communityImage/communityImage1.jpg"),
        id: "1",
        title: '갈기를 가지고 싶어',
        description: '라이언 캐릭터에서 영감을 받은 자작곡입니다. 많이 들어주세요~!',
        time: '0:25',
        artist: '이너피스',
        liked: true
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage2.jpg"),
        id: "2",
        title: '둠치둠칫',
        description: '흐애애앵',
        time: '1:20',
        artist: '뚱이',
        liked: false
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage3.jpg"),
        id: "3",
        title: '포로리야',
        description: '슬퍼!',
        time: '0:57',
        artist: '보노보노',
        liked: false
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
        title: '흥얼흥얼(feat.엘사)',
        description: '흥얼흥얼',
        time: '1:05',
        artist: '올라프',
        liked: false
    },
    {
        coverURL: require("../../assets/images/communityImage/communityImage6.jpg"),
        id: "6",
        title: '뚱인데요',
        description: '흐애애앵',
        time: '0:24',
        artist: '뚱이',
        liked: false
    }, {
        coverURL: require("../../assets/images/communityImage/communityImage7.jpg"),
        id: "7",
        title: '난 돈이 좋아',
        description: '집게리아 사장님의 자작곡',
        time: '1:20',
        artist: '집게사장',
        liked: true
    }, {
        coverURL: require("../../assets/images/communityImage/communityImage8.jpg"),
        id: "8",
        title: '바나나',
        description: '바나나 흥얼흥얼',
        time: '0:15',
        artist: '미니언',
        liked: false
    },
];

