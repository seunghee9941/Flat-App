import React, { useState } from "react";
import { Pressable } from 'react-native';
import styled from "styled-components/native";

interface StyleProps {
  x: number;
  y: number;
}

type NoteProps = {
  x: number,
  y: number,
}

const NoteContainer = styled.Pressable<StyleProps>`
  position: absolute;
  left: ${props => props.x}px;
  bottom: ${props => props.y}px;
  width: 20px;
  height: 10px;
  border-radius: 5px;
  border-width: 2px;
  background-color: #51CDDE;
`;

export const Note = ({x, y}: NoteProps) => {
  const [edited, setEdited] = useState(false);
  return(
    <NoteContainer onPressIn={() => setEdited(!edited)}
                   x={x} y={y}
                   style={{ borderColor: edited? 'white': '#51CDDE' }}/>
  )
}

Note.defaultProps = {
  x: 0,
  y: 0
}
