import React, { useState } from "react";
import {Dimensions, Text, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from "styled-components/native";

interface StyleProps {
  size: number;
}

interface StyleProps2 {
  isHorizontal: boolean;
}

interface StyleProps3 {
  isPlayed: boolean;
}

type AlbumProps = {
  state: 'LIKE_SMALL' | 'LIKE_LARGE' | 'PLAY_SMALL' | 'PLAY_LARGE',
  liked: boolean,
  title: string,
  artist: string,
  time: string,
  description: string,
  coverURL: string,
};

const ALBUM_SIZE = {
  'LIKE_SMALL': (Dimensions.get('window').width/3+10),
  'LIKE_LARGE': (Dimensions.get('window').width/2-40),
  'PLAY_SMALL': (Dimensions.get('window').width/8),
  'PLAY_LARGE': (Dimensions.get('window').width-40),
}

const AlbumHorizontalContainer = styled.View<StyleProps>`
  width: auto;
  height: ${props => props.size}px;
  flex-direction: row;
  margin: 3% 0 3% 0;
`;

const AlbumContainer = styled.View<StyleProps>`
  height: auto;
  width: ${props => props.size}px;
`;

const AlbumImageView = styled.View<StyleProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const AlbumImage = styled.Image<StyleProps3>`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  position: absolute;
  opacity: ${props => props.isPlayed ? 0.7 : 1};
`;

const PlayButton = styled.View`
  position: absolute;
`;

const LikedContainer = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 22px;
  height: 22px;
`;

const AlbumText = styled.View<StyleProps2>`
  padding-top: ${props => props.isHorizontal ? 0 : 3}px;
  padding-left: 10px;
  font-family: NanumSquare;
`;

export const Album = ({state, liked, coverURL, title, time, artist, description}: AlbumProps) => {

  const [played, setPlayed] = useState(false);

  return (
    <>
      {state === 'PLAY_SMALL' ?
        <AlbumHorizontalContainer size={ALBUM_SIZE[state]}>
          <AlbumImageView size={ALBUM_SIZE[state]}>
            <AlbumImage source={{uri: coverURL}} isPlayed={played}/>
            <PlayButton >
              <TouchableOpacity onPress={() => setPlayed(!played)}>
                {played ?
                  <MaterialCommunityIcons name="pause" size={30} color="white" />
                  :
                  <MaterialCommunityIcons name="play" size={30} color="white" />
                }
              </TouchableOpacity>
            </PlayButton>
          </AlbumImageView>
          <AlbumText isHorizontal={true}>
            <Text style={{  fontSize: 16 ,color:"white" }}>{title}</Text>
            <Text style={{ fontSize: 12 ,color:"#C4C4C4"}}>{artist} {time}</Text>
          </AlbumText>
        </AlbumHorizontalContainer>
        :
        <AlbumContainer size={ALBUM_SIZE[state]}>
          <AlbumImageView size={ALBUM_SIZE[state]}>
            <AlbumImage source={{uri: coverURL}} isPlayed={played}/>
            { state === 'PLAY_LARGE' &&
            <PlayButton >
              <TouchableOpacity onPress={() => setPlayed(!played)}>
                {played ?
                  <MaterialCommunityIcons name="pause" size={75} color="white" />
                  :
                  <MaterialCommunityIcons name="play" size={78} color="white" />
                }
              </TouchableOpacity>
            </PlayButton>
            }
            {liked ?
              <LikedContainer>
                <MaterialCommunityIcons name="heart" size={22} color="white" />
              </LikedContainer>
            : null}
          </AlbumImageView>
          <AlbumText isHorizontal={false}>
            {state === 'LIKE_SMALL' && <Text style={{ fontSize: 12 , color: 'white'}}>{title}</Text> }
            {state === 'LIKE_LARGE' &&
            <><Text style={{ fontSize: 16 , color: 'white'}}>{title}</Text>
              <Text style={{ fontSize: 12 , color: '#C4C4C4'}}>{artist} {time}</Text></>
            }
            {state === 'PLAY_LARGE' &&
            <><Text style={{ fontWeight: "bold", fontSize: 18 , color: 'white'}}>{title}</Text>
              <Text style={{ fontSize: 12 , color: '#C4C4C4'}}>{artist} {time}</Text>
              <Text style={{ fontSize: 12 , color: 'white'}}>{description}</Text></>
            }
          </AlbumText>
        </AlbumContainer>
      }
    </>
  );
};

Album.defaultProps = {
  coverURL: 'https://reactnative.dev/img/tiny_logo.png',
  liked: false,
  title: '제목',
  artist: '작곡가',
  time: '3:01',
  description: '이 곡은 어쩌구 저쩌구',
};
