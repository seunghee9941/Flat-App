import React from 'react';
import styled from 'styled-components/native'

const LogoView = styled.View`
  justify-content: center;
  align-self: stretch;
  height: 52px;
  align-items: center;
  background-color: #101010;
  padding: 0 10px;
  flex-direction: row;
`;

const LogoText= styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Logo = () => {
    return (
        <LogoView>
            <LogoText>Flat</LogoText>
        </LogoView>
    );
};


export default Logo;
