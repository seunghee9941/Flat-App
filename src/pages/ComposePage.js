import React from "react";
import styled from 'styled-components/native';
import {RoundButton} from "../components/RoundButton";

const ParentContainer = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;

export const ComposePage = ({navigation}) => {
    return (
        <ParentContainer>
            <Container>
                <RoundButton state="GRAD_LARGE" name="녹음하기" pageName="RecordPage" nav={navigation}/>
                <RoundButton state="GRAD_LARGE" name="편집하기" pageName="EditPage" nav={navigation}/>
                <RoundButton state="GRAD_LARGE" name="무료 BGM" pageName="BgmPage" nav={navigation}/>
            </Container>
        </ParentContainer>
    );
};
