import React, { useState } from "react";
import { Dimensions } from "react-native";
import {Note} from "./Note";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const NoteContainer = styled.View`
  position: relative;
  display: flex;
  width: ${props => props.width > windowWidth ? props.width : windowWidth }px;
  background-color: black;
`;

export const MusicSheet = ({positions}) => {
  return (
    <NoteContainer width={positions.length*30+40}>
      {positions.map((pos, index) =>
        <Note x={pos[1]} y={pos[0]} key={index}/>
      )}
    </NoteContainer>
  )
}

MusicSheet.defaultProps = {

}
