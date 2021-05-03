import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

interface StyleProps {
  size: number
}

type ProfileProps = {
  size: 'SMALL' | 'MEDIUM' | 'LARGE',
  imgURL: string,
}

const ALBUM_SIZE = {
  'SMALL': 30,
  'MEDIUM': 65,
  'LARGE': 90,
}

const ProfileContainer = styled.View<StyleProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const Profile = ({size, imgURL}: ProfileProps) => {
  return(
    <ProfileContainer size={ALBUM_SIZE[size]}>
      <ProfileImage source={{uri: imgURL}}/>
    </ProfileContainer>
  )
};

Profile.defaultProps = {
  imgURL: 'https://reactnative.dev/img/tiny_logo.png',
}
