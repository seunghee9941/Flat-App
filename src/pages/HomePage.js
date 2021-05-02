import React from "react";
import {View, Dimensions, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components/native';
import TopBar2 from "../components/TobBar2";
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TopBar from "../components/TobBar";
import {Album} from "../components/Album";
//버튼 들어갈 곳
const StyledView=styled.View`
  flex-direction: row;
  justify-content: center;
  width: 50%;
  height: auto;
`;
const AlbumContainer = styled.View`
  margin:10% 2% 0 2%;
  align-items: center;
`;
const FirstRoute = () => {
    const renderAlbum=({item})=>(
        <StyledView>
            <TouchableOpacity>
                <AlbumContainer>
                    <Album title={item.title} state={item.state} description={item.description} time={item.time} artist={item.artist} liked={item.liked}/>
                </AlbumContainer>
            </TouchableOpacity>
        </StyledView>
        )
    return(
        <ParentContainer>
            <FlatList data={albums}
                      renderItem={renderAlbum}
                      keyExtractor={(item)=> item.id} //수정
                      style={{margin:0}}
                      numColumns={2}
            />
        </ParentContainer>

    );


};
const SecondRoute = () => {
    const renderAlbum=({item})=>(
        <StyledView>
            <TouchableOpacity>
                <AlbumContainer>
                    <Album title={item.title} state={item.state} description={item.description} time={item.time} artist={item.artist} liked={item.liked}/>
                </AlbumContainer>
            </TouchableOpacity>
        </StyledView>
    )
    return(
        <ParentContainer>
            <FlatList data={albums}
                      renderItem={renderAlbum}
                      keyExtractor={(item)=> item.id} //수정
                      style={{margin:20}}
                      numColumns={2}
            />
        </ParentContainer>

    );

};


const initialLayout = {width: Dimensions.get('window').width};

const Container = styled.View`
  justify-content: center;
  align-self: stretch;
  height: 50px;
  align-items: center;
  background-color: #101010;
  border-width: 1px;
  flex-direction: row;
`;
const ParentContainer = styled.View`
  flex: 1;
  background-color: #101010;
`;
const StyledText=styled.Text`
  font-size: 20px;
  color: #ffffff;
`;
export const HomePage =() =>{

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
        <ParentContainer>
            <TopBar/>
            <Container>
                <StyledText>이너피스의 플레이리스트</StyledText>
            </Container>

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
        </ParentContainer>
    );
};
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    like: {
        padding: 8,
        backgroundColor: '#101010',
        fontSize: 10,
    },
});
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
        title: '슬픔이',
        state: 'LIKE_LARGE',
        description: '흐애애앵',
        time: '1:20',
        artist:'보경',
        liked: true
    },
];
