import React from "react";
import styled from 'styled-components/native';
import { FlatList, Text, TouchableOpacity, View, Button} from "react-native";
import { Album } from "../components/Album";
import { Profile } from "../components/Profile";

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
  padding: 0px 10px 0px 10px;
  justify-content: center;
`;
const LikeSingView = styled.View`
  flex: 2;
  padding: 0px 10px 0px 10px;
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
export const MyPage = ({navigation}) => {
    return (

        <Container>
            <UserFirstView>
                <StyledText>User Name</StyledText>
                <UserSecondView>
                    <Profile size={'MEDIUM'} imgURL={''}/>
                    <UserThirdView>
                        <Text style={{color: '#ffffff', padding: 5}}>이제 작곡에 입문한 병아리 작곡가 입니다. {"\n"}피드백 환영합니다!</Text>
                        <View style={{width: 85, borderWidth: 1.5, borderColor: 'white', borderRadius: 5}}>
                            <Button
                                onPress={() => navigation.navigate('Setting')} title={"프로필편집"} color='#000000'
                                style={{borderColor: 'white'}}/>
                        </View>
                    </UserThirdView>
                </UserSecondView>
            </UserFirstView>

            <OpenSingView>
                <StyledText>공개 허용한 곡</StyledText>
                <FlatList
                    data={albums}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <AlbumView>
                                    <Album title={item.title} state={item.state} description={item.description}/>
                                </AlbumView>
                            </TouchableOpacity>
                        );
                    }}
                />
            </OpenSingView>
            <LikeSingView>
                <StyledText>스크랩한 곡</StyledText>
                <FlatList
                    data={albums}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <AlbumView>
                                    <Album title={item.title} state={item.state} description={item.description}/>
                                </AlbumView>
                            </TouchableOpacity>
                        );
                    }}
                />
            </LikeSingView>
        </Container>
    );
};

const albums = [
    {
        id: "1",
        title: '조이',
        state: 'LIKE_SMALL',
        description: '깔깔깔',
        time: '1:20',
        artist: '보경',
        liked: true
    },
    {
        id: "2",
        title: '슬픔이',
        state: 'LIKE_SMALL',
        description: '흐애애앵',
        time: '1:20',
        artist: '보경',
        liked: true
    },
    {
        id: "3",
        title: '소심이',
        state: 'LIKE_SMALL',
        description: '슬퍼!',
        time: '1:20',
        artist: '보경',
        liked: true
    },
];
