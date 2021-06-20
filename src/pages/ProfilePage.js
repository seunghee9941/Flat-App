import React from "react";
import styled from 'styled-components/native';
import { FlatList, Text, TouchableOpacity, View, Button } from "react-native";
import { Album } from "../components/Album";
import { ProfileImage } from "../components/ProfileImage";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #101010;
`;
const UserFirstView = styled.View`
  flex: 1;
  padding: 20px 10px 10px 10px;
  justify-content: center;
`;
const UserSecondView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const UserThirdView = styled.View`
  padding: 10px;
  justify-content: center;
  flex: 1;
`;
const OpenSingView = styled.View`
  flex: 2;
  padding: 0 10px 0 10px;
  justify-content: center;
`;
const LikeSingView = styled.View`
  flex: 2;
  padding: 0 10px 0 10px;
  justify-content: center;
`;
const AlbumView = styled.View`
  padding-right: 8px;

  justify-content: center;
  align-items: center;
  flex: 1;
`;
const StyledText = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

//받아와야할 것, UserName, Image, introduce, 공개 허용한 곡의 정보, 좋아요 등록한 곡의 정보
export const ProfilePage = ({navigation}) => {
    return (

        <Container>
            <UserFirstView>
                <StyledText>이너피스</StyledText>
                <UserSecondView>
                    <ProfileImage size={'MEDIUM'} imgURL={require('../../assets/images/profileImage/ProfileImage.png')}/>
                    <UserThirdView>
                        <Text style={{color: '#ffffff', padding: 5}}>이제 작곡에 입문한 병아리 작곡가 입니다. {"\n"}피드백 환영합니다!</Text>
                        <View style={{width: 85, borderWidth: 1.5, borderColor: 'white', borderRadius: 3}}>
                            <Button
                                onPress={() => navigation.navigate('Setting')} title={"프로필편집"} color='#101010'/>
                        </View>
                    </UserThirdView>
                </UserSecondView>
            </UserFirstView>

            <OpenSingView>
                <StyledText>공개 허용한 곡</StyledText>
                <FlatList
                    data={myAlbums}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <AlbumView>
                                    <Album title={item.title} state={item.state} description={item.description}  coverURL={item.coverURL} isPublic={true}/>
                                </AlbumView>
                            </TouchableOpacity>
                        );
                    }}
                />
            </OpenSingView>
            <LikeSingView>
                <StyledText>스크랩한 곡</StyledText>
                <FlatList
                    data={scrapedAlbums}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <AlbumView>
                                    <Album title={item.title} state={item.state} description={item.description} liked={true} coverURL={item.coverURL}/>
                                </AlbumView>
                            </TouchableOpacity>
                        );
                    }}
                />
            </LikeSingView>
        </Container>
    );
};

const myAlbums = [
    {
        coverURL: require("../../assets/images/profileImage/profilePage1.png"),
        id: "1",
        title: '노래1',
        state: 'LIKE_SMALL',
        description: '깔깔깔',
        time: '1:20',
        artist: '보경',
        liked: true
    },
    {
        coverURL: require("../../assets/images/profileImage/profilePage2.jpg"),
        id: "2",
        title: '곰인형',
        state: 'LIKE_SMALL',
        description: '흐애애앵',
        time: '1:20',
        artist: '보경',
        liked: true
    },
    {
        coverURL: require("../../assets/images/profileImage/profilePage3.jpg"),
        id: "3",
        title: '우주',
        state: 'LIKE_SMALL',
        description: '슬퍼!',
        time: '1:20',
        artist: '보경',
        liked: true
    },
];

const scrapedAlbums = [
    {
        coverURL: require("../../assets/images/profileImage/profilePage4.jpg"),
        id: "1",
        title: '나랑 사귀자',
        state: 'LIKE_SMALL',
        description: '깔깔깔',
        time: '1:20',
        artist: '보경',
        liked: true
    },
    {
        coverURL: require("../../assets/images/profileImage/profilePage5.jpg"),
        id: "2",
        title: '여정윤',
        state: 'LIKE_SMALL',
        description: '흐애애앵',
        time: '1:20',
        artist: '보경',
        liked: true
    },
    {
        coverURL: require("../../assets/images/profileImage/profilePage6.jpg"),
        id: "3",
        title: '무야호 Remix',
        state: 'LIKE_SMALL',
        description: '슬퍼!',
        time: '1:20',
        artist: '보경',
        liked: true
    },
];
