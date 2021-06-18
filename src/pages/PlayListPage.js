import React from "react";
import {Dimensions, TouchableOpacity, FlatList, View, SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Album} from "../components/Album";

const initialLayout = {width: Dimensions.get('window').width};

const RenderAlbumView = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 50%;
  height: auto;
`;

const AlbumWrapper = styled.View`
  margin:10% 2% 0 2%;
  align-items: center;
`;

const TitleWrapper = styled.View`
  justify-content: center;
  align-self: stretch;
  height: 50px;
  align-items: center;
  background-color: #101010;
  flex-direction: row;
`;


const FirstRoute = () => {
    const renderAlbum=({item})=>(
        <RenderAlbumView>
            <TouchableOpacity>
                <AlbumWrapper>
                    <Album state="LIKE_LARGE" title={item.title} description={item.description} time={item.time} artist={item.artist} isPublic={item.isPublic}/>
                </AlbumWrapper>
            </TouchableOpacity>
        </RenderAlbumView>
        )
    return(
        <View style={{flex: 1, backgroundColor: "#101010"}}>
            <FlatList data={myAlbums}
                      renderItem={renderAlbum}
                      keyExtractor={(item)=> item.id} //수정
                      style={{margin:20}}
                      numColumns={2}
            />
        </View>
    );
};

const SecondRoute = () => {
    const renderAlbum=({item})=>(
        <RenderAlbumView>
            <TouchableOpacity>
                <AlbumWrapper>
                    <Album state="LIKE_LARGE" title={item.title} description={item.description} time={item.time} artist={item.artist} liked={item.liked}/>
                </AlbumWrapper>
            </TouchableOpacity>
        </RenderAlbumView>
    );

    return(
        <View style={{flex: 1, backgroundColor: "#101010"}}>
            <FlatList data={likedAlbums}
                      renderItem={renderAlbum}
                      keyExtractor={(item)=> item.id} //수정
                      style={{margin:20}}
                      numColumns={2}
            />
        </View>
    );
};



export const PlayListPage =() =>{
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'BGM'},
        {key: 'second', title: '스크랩'},
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#101010"}}>
            <TitleWrapper>
                <Text style={{fontSize: 20, color: "#ffffff"}}>이너피스의 플레이리스트</Text>
            </TitleWrapper>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        style={{
                            padding: 0,
                            backgroundColor: '#101010',
                            fontSize:10,
                            }}
                        indicatorStyle={{
                            backgroundColor: '#87F8FF',
                        }}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const myAlbums = [
    {
        id: "1",
        title: '조이',
        description: '깔깔깔',
        time: '1:20',
        artist:'보경',
        isPublic: true
    },
    {
        id: "2",
        title: '슬픔이',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        isPublic: false
    },
    {
        id: "3",
        title: '슬픔이',
        state: 'LIKE_LARGE',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        isPublic: false
    },
];

const likedAlbums = [
  {
    id: "1",
    title: '조이',
    description: '깔깔깔',
    time: '1:20',
    artist:'보경',
    liked: true
  },
  {
    id: "2",
    title: '슬픔이',
    description: '흐애애앵',
    time: '1:20',
    artist:'보경',
    liked: true
  },
  {
    id: "3",
    title: '슬픔이',
    state: 'LIKE_LARGE',
    description: '흐애애앵',
    time: '1:20',
    artist:'보경',
    liked: true
  },
];
