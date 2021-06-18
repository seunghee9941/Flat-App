import React from "react";
import styled from "styled-components/native";
import {Dimensions, ImageSourcePropType} from "react-native";

interface StyleProps {
  size: number
}

type ProfileProps = {
  size: 'SMALL' | 'MEDIUM' | 'LARGE',
  imgURL: ImageSourcePropType,
}

const ALBUM_SIZE = {
  'SMALL': (Dimensions.get('window').width/14),
  'MEDIUM': (Dimensions.get('window').width/5),
  'LARGE': (Dimensions.get('window').width/3.5),
}

const ProfileImageView = styled.View<StyleProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const UserImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const ProfileImage = ({size, imgURL}: ProfileProps) => {
  return(
    <ProfileImageView size={ALBUM_SIZE[size]}>
      <UserImage source={imgURL}/>
    </ProfileImageView>
  )
};

ProfileImage.defaultProps = {
  imgURL: 'https://reactnative.dev/img/tiny_logo.png',
}
