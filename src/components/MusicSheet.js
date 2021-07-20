import React, {useLayoutEffect, useState} from "react";
import { Dimensions } from "react-native";
import { Note } from "./Note";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const NoteContainer = styled.View`
  position: relative;
  display: flex;
  width: ${props => props.width > windowWidth ? props.width : windowWidth }px;
  background-color: black;
`;

export const MusicSheet = ({positions, setTest}) => {
    const [changedY, setChangedY] = useState();
    const [changedIdx, setChangedIdx] = useState();

    useLayoutEffect(() => {
        console.log(changedY, changedIdx);
        setChangedIdx(changedIdx);
        setChangedY(changedY);
        setTest(prevState => prevState.map((item, index) => changedIdx === index ? (changedY+200)/5 : item))
    }, [changedY])

    return (
        <NoteContainer width={positions.length*30+40}>
            {positions.map((pos, index) =>
                <Note x={pos[0]} y={pos[1]} key={index} idx={index} setY={setChangedY} setIdx={setChangedIdx}/>
            )}
        </NoteContainer>
    )
}

MusicSheet.defaultProps = {

}
