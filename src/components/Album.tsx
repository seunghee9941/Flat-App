import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";
import * as url from "url";

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
  'LIKE_SMALL': 140,
  'LIKE_LARGE': 150,
  'PLAY_SMALL': 40,
  'PLAY_LARGE': 330,
}

const AlbumHorizontalContainer = styled.View<StyleProps>`
  width: auto;
  height: ${props => props.size}px;
  flex-direction: row;
`;

const AlbumContainer = styled.View<StyleProps>`
  height: auto;
  width: ${props => props.size}px;
  
`;

const AlbumCover = styled.View<StyleProps>`
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
  top: 11px;
  left: 13px;
  
  width: 32px;
  height: 32px;
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
  padding-left: 5px;
  font-family: NanumSquare;
`;

export const Album = ({state, liked, coverURL, title, time, artist, description}: AlbumProps) => {
  const coverPath = require('../../assets/images/AlbumCover.png');
  const [played, setPlayed] = useState(false);

  return (
    <>
      {state === 'PLAY_SMALL' ?
        <AlbumHorizontalContainer size={ALBUM_SIZE[state]}>
          <AlbumCover size={ALBUM_SIZE[state]}>
            <AlbumImage source={coverPath} isPlayed={played}/>
            <PlayButton >
              <TouchableOpacity onPress={() => setPlayed(!played)}>
                {played ?
                  <MaterialCommunityIcons name="pause" size={32} color="white" />
                  :
                  <MaterialCommunityIcons name="play" size={16} color="white" /> //15, 18
                }
              </TouchableOpacity>
            </PlayButton>
          </AlbumCover>
          <AlbumText isHorizontal={true}>
            <Text style={{ fontWeight: "bold", fontSize: 16}}>{title}</Text>
            <Text style={{ fontSize: 12 }}>{artist} {time}</Text>
          </AlbumText>
        </AlbumHorizontalContainer>
        :
        <AlbumContainer size={ALBUM_SIZE[state]}>
          <AlbumCover size={ALBUM_SIZE[state]}>
            <AlbumImage source={ coverPath } isPlayed={played}/>
            { state === 'PLAY_LARGE' &&
            <PlayButton >
              <TouchableOpacity onPress={() => setPlayed(!played)}>
                {played ?
                  <MaterialCommunityIcons name="pause" size={70} color="white" />
                  :
                  <MaterialCommunityIcons name="play" size={65} color="white" /> //60,72
                }

              </TouchableOpacity>
            </PlayButton>
            }
            {liked ?
              <LikedContainer>
                <MaterialCommunityIcons name="heart" size={22} color="white" />
              </LikedContainer>
            : null}
          </AlbumCover>
          <AlbumText isHorizontal={false}>
            {state === 'LIKE_SMALL' && <Text style={{ fontSize: 12 , color: 'white'}}>{title}</Text> }
            {state === 'LIKE_LARGE' &&
            <><Text style={{ fontWeight: "bold", fontSize: 16 , color: 'white'}}>{title}</Text>
              <Text style={{ fontSize: 12 , color: 'white'}}>{artist} {time}</Text></>
            }
            {state === 'PLAY_LARGE' &&
            <><Text style={{ fontWeight: "bold", fontSize: 18 , color: 'white'}}>{title}</Text>
              <Text style={{ fontSize: 12 , color: 'white'}}>{artist} {time}</Text>
              <Text style={{ fontSize: 12 , color: 'white'}}>{description}</Text></>
            }
          </AlbumText>
        </AlbumContainer>
      }
    </>
  )
};

Album.defaultProps = {
  coverURL: '../../assets/images/AlbumCover.png',
  liked: false,
  title: '제목',
  artist: '작곡가',
  time: '3:01',
  description: '이 곡은 어쩌구 저쩌구',
}
